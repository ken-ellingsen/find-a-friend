const UserDetails = ( {data} ) => (
  <div className="user-details">
    <p className="name ">{data.name.title}. {data.name.first} {data.name.last}</p>
    <p className="country">{data.nat}</p>
    <p className="email">{data.email}</p>
    <figure><img src={data.picture.large} alt="Random user avatar" /></figure>
    <button>Fetch Another</button>
  </div>
);

export default UserDetails;
