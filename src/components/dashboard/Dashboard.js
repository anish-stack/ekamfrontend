import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './dashboard.css'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [showInput,setShowInput] = useState(false);
  const [password ,setPassword] = useState()
  const userJsonString = localStorage.getItem('user');
  const token = localStorage.getItem('token')
  if(!token){

    window.location.href = '/'
  }

  const handleLogout = ()=>{

    localStorage.removeItem('token')
  
    window.location.reload()
    window.location.href="/"
  }

  // Parse the JSON string to a JavaScript object
const userObject = JSON.parse(userJsonString);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ShowChangePasswordInput = ()=>{
    setShowInput(true)
  }
  const closeChangePasswordInput = ()=>{
    setShowInput(false)
  }

  const handleChangePassWord = async(e)=>{
    e.preventDefault()
    const apiUrl = process.env.REACT_APP_API_URL;

try {
  const response = await axios.post(`${apiUrl}/api/v1/change-password`,{
    email:userObject.email,
    newPassword:password
  })
  console.log(response.data)
} catch (error) {
  console.log(error)

}
  }
  const [purchaseIds, setPurchaseIds] = useState([]);
  const [purchaseDetails, setPurchaseDetails] = useState([]);

  const myStuffs = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.get(
        `${apiUrl}/api/v1/getmyStuff`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const ids = response.data.purchases.map((purchase) => purchase.itemId);
      setPurchaseIds(ids);
      setPurchaseDetails(response.data.purchases);

      // Handle the response or perform other actions
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };

  const stuffInformation = async (purchaseItemId) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.get(`${apiUrl}/api/v1/getMakePyamentProductInfo/${purchaseItemId}`);
      // Handle the response or perform other actions
      console.log(response.data);

      // Update the state with the new information
      setPurchaseDetails((prevPurchaseDetails) =>
        prevPurchaseDetails.map((purchase) =>
          purchase.itemId === purchaseItemId ? response.data : purchase
        )
      );
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Call myStuffs when the component mounts
    myStuffs();
  }, [token]); 

  useEffect(() => {
    // Call stuffInformation for each purchaseId
    purchaseIds.forEach((purchaseId) => {
      stuffInformation(purchaseId);
    });
  }, [purchaseIds]);
  
  const constructURL = (purchase) => {
    // Customize this part based on your requirements
    const baseURL = "/User/certificates";
    const queryParams = [
      `workShopTitle=${encodeURIComponent(purchase.product?.WorkShopTitle || "N/A")}`,
      `trainerName=${encodeURIComponent(purchase.product?.TrainerName || "N/A")}`,
      `WorkShopDate=${encodeURIComponent(purchase.product?.WorkShopDate || "N/A")}`,
      `Duration=${encodeURIComponent(purchase.product?.Duration || "N/A")}`,
      // Add more parameters as needed
    ];
  
    return `${baseURL}?${queryParams.join("&")}`;
  };
  



  
  return (
    <div className='dashboard_container'>
      <div className="Nav_Dashboard">
        <ul className='tabs'>
          <li onClick={() => handleTabClick('Profile')} className={activeTab === 'Profile' ? 'active' : ''}>
            <Link to="">Profile</Link>
          </li>
          <li onClick={() => { handleTabClick('PurchaseModel');}}className={activeTab === 'PurchaseModel' ? 'active' : ''}>
            <Link to=''>Payments</Link>
          </li>
          {/* <li onClick={() => handleTabClick('Certificates')} className={activeTab === 'Certificates' ? 'active' : ''}>
            <Link to=''>Certificates</Link>
          </li> */}
          <li onClick={() => handleTabClick('ContactUs')} className={activeTab === 'ContactUs' ? 'active' : ''}>
            <Link to='/User/Contact'>Contact Us</Link>
          </li>
          <li>
          <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>

      <div className='tab-content'>
        {activeTab === 'Profile' &&
           <div className='Profile-conatiner'>
            <div className='head'>
              <h2>Profile</h2>
            </div>

            <div className='User_info'>
            <h4><span>Name:</span> {userObject.username} </h4>
            <h4>Email: <span>{userObject.email} </span> </h4>
            <h4>Password : <span>***********</span></h4>
            {showInput && (
      <div>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleChangePassWord} type="submit">
          Submit
        </button>
        <button onClick={closeChangePasswordInput} type="submit">
          Close
        </button>
        
      </div>
    )}
    <button onClick={ShowChangePasswordInput}>Change Password</button>
            <h4>Designiation : <span>{userObject.Designiation}</span></h4>
            </div>
          </div>}
        {activeTab === 'PurchaseModel' &&
         <div className='purchase_model'>
            <div className='head'>
              <h2>All Payments!</h2>
            </div>
            <div className='purchase_model_table'>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Name</th>
          <th>Workshop Date</th>
          <th>Purchase Price</th>
          <th>Duration</th>
          <th>Passcode</th>
          <th>Record Session Link</th>
          <th>Session Link</th>
          <th>Certificate Link</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {purchaseDetails.map((purchase) => {
          console.log("purchase");

          return (
            <tr key={purchase._id}>
             <td>
  {purchase.product?.WorkShopTitle || purchase.product?.title || "N/A"}
</td>

              <td>{purchase.product?.TrainerName ||  "Not Available"}</td>
              <td>{purchase.product?.WorkShopDate || "This Is Auido Book"}</td>
              <td>{purchase.product?.DiscountPrice || "N/A"}</td>
              <td>{purchase.product?.Duration || "N/A"}Hours</td>
              <td>{purchase.product?.Passcode || "N/A"}</td>
              <td><a href={purchase.product?.RecordSessionLink || purchase.product?.audioLinks}>Link</a></td>

              <td><a href={purchase.product?.SessionLink || "N/A" }>Link</a></td>
              <a
  href="/?"
  onClick={(e) => {
    e.preventDefault(); // Prevent default behavior (opening the link)
    const certificateURL = constructURL(purchase);
    window.location.href = certificateURL;
  }}
>
  {purchase.product?.certiFicateLink || "certiFicateLink"}
</a>            {/* Add more cells as needed */}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
              
          </div>}

       
        {activeTab === 'ContactUs' && <div>Contact Us Content Goes Here</div>}
      </div>
    </div>
  );
};

export default Dashboard;
