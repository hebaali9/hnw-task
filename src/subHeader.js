import "./subHeader.css";

function SubHeder(params) {
  return (
    <div className="sub-header">
      <span className="span-sub-header1">Direction</span>
      <span className="span-sub-header2">Design</span>
      <span className="span-sub-header3">Development</span>
      <span className="span-sub-header4">Delivery</span>
      <input
        className="search-input"
        type="search"
        placeholder="search"
      ></input>
    </div>
  );
}
export default SubHeder;
