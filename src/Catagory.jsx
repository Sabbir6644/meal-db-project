import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SingleCatagory from './SingleCatagory';
import { Oval } from 'react-loader-spinner'


const Catagory = () => {
     const { categories } = useLoaderData();
     const navigation = useNavigation();

     return (
          <div>
               
               <div className="flex justify-center gap-3 flex-wrap my-5 shadow-lg py-5">
               <Link to={'/'}><button className="btn btn-secondary">Home</button></Link>
                    {
                         
                         categories.map((data, index) => <SingleCatagory key={index} data={data}></SingleCatagory>)
                    }
               </div>
               <div>
                    {
                         navigation.state === "loading" ?  <div className="flex justify-center mt-48"><Oval
                         height={80}
                         width={80}
                         color="#4fa94d"
                         wrapperStyle={{}}
                         wrapperClass=""
                         visible={true}
                         ariaLabel='oval-loading'
                         secondaryColor="#4fa94d"
                         strokeWidth={2}
                         strokeWidthSecondary={2}
                       
                       /> </div> : <Outlet></Outlet>
                    }
               </div>
              
          </div>
     );
};

export default Catagory;