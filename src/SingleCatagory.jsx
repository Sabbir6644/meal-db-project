import { useNavigate } from "react-router-dom";


const SingleCatagory = ({data}) => {
     const navigate = useNavigate();
     // console.log(data);
    const handleShowByCatagory= ()=>{
navigate(`/catagory/${data.strCategory}`)
    }
     return (
          <div>
               <button onClick={handleShowByCatagory} className="btn btn-secondary">{data.strCategory}</button>
          </div>
     );
};

export default SingleCatagory;