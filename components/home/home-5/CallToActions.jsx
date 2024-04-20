const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Аялалд бэлэн үү</h2>
              <p className="text-dark-1 sectionTitle__text mt-5 sm:mt-0">
                Яг одоо бүртгүүлээд аялаарай.
              </p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <button className="button px-40 h-60 -white bg-blue-1 text-white">
                  Нэвтрэх
                  <i className="icon-arrow-top-right ml-10" />
                </button>
              </div>
              {/* End col */}
              <div className="col-auto">
                <button className="button px-40 h-60 -outline-blue-1 text-blue-1">
                  Бүртгүүлэх
                  <i className="icon-arrow-top-right ml-10" />
                </button>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default CallToActions;
