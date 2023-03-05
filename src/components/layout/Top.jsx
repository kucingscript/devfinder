const Top = ({ data: { avatar_url, name, login, created_at } }) => (
  <>
    <div className="w-full sm:w-1/5 items-start">
      <img
        src={avatar_url}
        alt={name}
        className="rounded-full object-cover w-32 mx-auto sm:mx-0 mb-6 sm:mb-0"
      />
    </div>

    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-center sm:text-left">
      <h1 className="font-bold text-xl sm:text-2xl">
        {name || "Not Available"} <br />{" "}
        <span className="text-sm font-normal text-neonGreen">{login}</span>
      </h1>
      <p className="text-sm mt-2 sm:mt-0">{created_at}</p>
    </div>
  </>
);
export default Top;
