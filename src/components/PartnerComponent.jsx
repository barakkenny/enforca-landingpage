const PartnerComponent = () => {
  return (
    <div className="lg:px-16 xl:px-24 md:px-12 sm:px-16 xxs:px-4 xs:px-8 py-20">
      <h1 className="text-center text-black xxs:text-lg xs:text-2xl sm:text-3xl font-semibold">
        Trusted by Professionals
      </h1>
      <div className="flex items-center mt-5 justify-center xs:gap-4 sm:gap-12 md:gap-16 xl:gap-20">
        <img className="xxs:w-24 sm:w-28 md:w-30 md:h-24 lg:w-30 lg:h-24" src="/google.png" alt="google" />
        <img className="xxs:w-28 sm:w-50 h-30" src="/spacex.png" alt="spacex" />
        <img className="xxs:w-24 sm:w-28 h-30" src="/meta.png" alt="meta" />
      </div>
    </div>
  );
};

export default PartnerComponent;
