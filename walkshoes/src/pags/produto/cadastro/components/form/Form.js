import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  id: yup.number().required(),
  nome: yup.string().required(),
  valor: yup.number().required(),
  tamanho: yup.number().required(),
  estado: yup.string().required(),
  categoria: yup.string().required(),
  quantidade: yup.number().required(),
  img: yup.string().required(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) =>
    axios.post("http://localhost:8080/postCadastro", {
      id: data.id,
      nome: data.nome,
      valor: data.valor,
      tamanho: data.tamanho,
      estado: data.estado,
      categoria: data.categoria,
      quantidade: data.quantidade,
      img: data.img,
    },
    alert('Produto Cadastrado'));

  return (
    <div className="formgeral">
      <h3 className="form_title">Cadastro de Produto</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ident">
          <h3 className="ident_title">Identificação do produto</h3>

          <div className="ident_content">
            <label className="ident_label">Código:</label>
            <input
              className="ident_input"
              type="number"
              name="id"
              {...register("id")}
            />
          </div>

          <div className="ident_content">
            <label className="ident_label">Título:</label>
            <input
              className="ident_input"
              type="text"
              name="nome"
              {...register("nome")}
            ></input>
          </div>

        </div>
        <div className="info">
          <h3 className="info_title">Informações do produto</h3>

          <div className="info_img">
            <label className="ident_label">Imagem:</label>
            <input
              className="ident_input"
              type="text"
              name="img"
              {...register("img")}
            ></input>
          </div>

          <div className="info_categoria">
            <label className="ident_label">Categoria:</label>
            <input
              className="ident_input"
              type="text"
              name="categoria"
              {...register("categoria")}
            />
          </div>

          <div className="info_quantidade">
            <label className="ident_label">Quantidade:</label>
            <input
              className="ident_input"
              type="number"
              name="quantidade"
              {...register("quantidade")}
            ></input>
          </div>

          <div className="info_tamanho">
            <label className="ident_label">Tamanho:</label>
            <input
              className="ident_input"
              type="number"
              name="tamanho"
              {...register("tamanho")}
            ></input>
          </div>

          <div className="info_estado">
            <label className="ident_label">Estado:</label>
            <input
              className="ident_input"
              type="text"
              name="estado"
              {...register("estado")}
            ></input>
          </div>

          <div className="info_value">
            <label className="ident_label">Preço Venda:</label>
              <input
                className="ident_input"
                type="string"
                name="valor"
                {...register("valor")}
              ></input>
          </div>
        </div>
        <div className="button">
          <button className="input_submit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
