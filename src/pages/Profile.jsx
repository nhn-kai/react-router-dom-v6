import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지입니다.</h2>
      {id && <p>id 는 {id} 입니다.</p>}
    </div>
  );
};

export default Profile;
