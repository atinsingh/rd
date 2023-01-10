import Footer from "./Footer";
import Header from "./Header";
import ScrollUp from "./ScrollUp";
const defaultSetting  = {
  header: {
      style: 'four',
      leftColumn: 'col-lg-3 col-md-6 col-sm-6 col-8',
      rightColumn: 'col-lg-9 col-md-6 col-sm-6 col-4',
  },
  footer: {
      style: 'three',
  },
};
const Layout = ({
  layoutSettings = { header: "", footer: "" },
  children,
  showFooter = true,
}) => {
  return (
    <>
      <div className="main-content">
        <Header headerSetting={defaultSetting.header} />
        {children}
        {showFooter && <Footer footerSetting={defaultSetting.footer} />}
      </div>
      <ScrollUp />
    </>
  );
};

export default Layout;
