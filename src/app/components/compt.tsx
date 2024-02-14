const Compt = ({ datamock, fontSize }) => {
    
    return (
      <div className="text-black flex flex-col bg-white p-4 justify-center items-center rounded-xl">
        <div className="rounded-xl border-2 px-10 bg-slate-500 py-2 w-full">
          <span className={` text-slate-100 w-22 h-20`} style={{fontSize:`${fontSize}`}}>
            {datamock.quote}
          </span>
        </div>
        <div className="w-full justify-start items-start">
          <div className="w-full justify-end flex items-end">
            <span className="text-black w-auto">-- {datamock?.author}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Compt;