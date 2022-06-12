import "./IdentificProd.css";


const IdentificProd = (props) => {
 
  return (
    <div className="ident">
      <h3 className="ident_title">Identificação do produto</h3>

      <form className="ident_form">

        <div className="ident_content">
          <label className="ident_label">
            Título:
          </label>
          <input
            className="ident_input"
            type="text"
            name="title"
            value={props.card.title}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_content">
          <label className="ident_label">
            Código:
          </label>
          <input
            className="ident_input"
            type="text"
            name="cod"
            value={props.card.cod}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_content">
          <label className="ident_label">
            Marca:
          </label>
          <input
            className="ident_input"
            type="text"
            name="brand"
            value={props.card.brand}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

      </form>
    </div>
  );
};

export default IdentificProd;

