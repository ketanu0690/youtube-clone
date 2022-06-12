import React, { useEffect } from "react";
import Amplify, { Auth, Storage } from "aws-amplify";
import "../CSS/Upload.css";
import { useNavigate } from "react-router-dom";
// import { Auth } from "aws-amplify";

const Upload = () => {
  const ref = React.useRef(null);
  const [storagefile, setstorageFile] = React.useState([]);
  const [image, setImage] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const history = useNavigate();

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-1:42384dae-959d-481e-900c-14779d6d08af",
        region: "us-east-1",
        userPoolId: "us-east-1_f8f8f8f8",
      },
      Storage: {
        AWSS3: {
          bucket: "youtubeclone-bucketketan",
          region: "us-east-1",
        },
      },
    });
  }, []);

  useEffect(() => {
    handleChange();
  }, []);


  const handleChange = (e) => {
    Storage.list("")
      .then((data) => {
        console.log(data);
        setstorageFile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileName = `${Date.now()}-${file.name}`;
    const fileType = file.type;
    const fileSize = file.size;
    const filePath = `${fileName}`;
    const fileBody = file;
    const fileUpload = await Storage.put(filePath, fileBody, {
      contentType: fileType,
      contentLength: fileSize,
      progressCallback: (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100));
        setTimeout(() => {
          setProgress(0);
        }
        , 1000);

      }

    });
    console.log(fileUpload);
    handleChange();
  };

  const handelShow = async(file) => {
     await Storage.get(file)
      .then((data) => {
        setImage(data)
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handelDelete = (file) => {
    Storage.remove(file).then(data => {
      console.log(data);
      // setstorageFile(data);
      handleChange();
    }
    ).catch(err => {
      console.log(err);
    }
    );
  };

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      history("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }


  return (
    <>

    
    <div className="Upload">
      <h1> Upload Images , Video , Document </h1>
      <input type="file" name="" id="" onChange={handleUpload} />
      {progress > 0 && <progress value={progress} max="100" />}
      <table>
      <img src={image} alt="IMAGE SECTION" width={200} height={200} />
        <tbody>
          
          {storagefile.map((file) => (
            <tr key={file.key}>
              <td>{file.key}</td>
              <td>{file.size}</td>
              <td>{file.contentType}</td>
              <td>
                <button onClick={() => handelShow(file.key)}>Show</button>
                <button onClick={() => handelDelete(file.key)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>       
    </div>
    
    <button variation="primary" onClick={() => signOut()}>
            SIGN OUT
          </button>
    </>
  );
};

export default Upload;

// // Initialize the Amazon Cognito credentials provider
// AWS.config.region = 'us-east-1'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:42384dae-959d-481e-900c-14779d6d08af',
// });
