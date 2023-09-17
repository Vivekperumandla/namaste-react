const Contact = () => {
  return (
    <div className="flex-col mt-7">
      <h1 className="font-bold text-lg flex justify-center">Contact Us Page</h1>
      <h2 className="flex justify-center">
        Contact us for Namaste React Web Series
      </h2>
      <form className="flex justify-center items-baseline">
        <input
          type="text"
          className="p-2 m-4 border border-black"
          placeholder="username"
        />
        <input
          type="text"
          className="p-2 m-4 border border-black"
          placeholder="message"
        />
        <button className="border border-black bg-gray-400 rounded-sm p-2 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
