const PartnerComponent = () => {
  return (
    <div className="px-24 py-20">
      <h1 className="text-center text-black text-3xl font-semibold">
        Trusted by Professionals
      </h1>
      <div className="flex items-center justify-center space-x-16">
        <img className="w-30 h-24" src="/google.png" alt="google" />
        <img className="w-50 h-30" src="/spacex.png" alt="spacex" />
        <img className="w-28 h-30" src="/meta.png" alt="meta" />
      </div>
    </div>
  );
};

export default PartnerComponent;
