import { Schema, model } from "mongoose";

//schemas por subclase
const clienteSchema = new Schema({
  _id: {
    type: String,
  },
  _tipoObjeto: {
    type: String,
  },
  _nombre: {
    type: String,
  },
  _telefono: {
    type: String,
  },
  _direccion: {
    type: {numero: String, calle: String},
  },
  _capital: {
    type: Number,
  },
  _ingresos: {
    type: Number,
  },
  _plan: {
    type: String,
  },
  _comercial: {
    type: String,
  }
});
export const Cli = model("clientes", clienteSchema);

export type tCliente = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: string | null;
  _direccion: {numero: string, calle: string} | null;
  _capital: number | null;
  _ingresos: number | null;
  _plan: string | null,
  _comercial: string | null;
};

export type tCliente2 = {
  _id: string;
  _tipoObjeto: string;
  _nombre: string;
  _telefono: string;
  _direccion: {numero: string, calle: string};
  _capital: number;
  _ingresos: number;
  _plan: string,
  _comercial: string;
};

export type tPersona = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: string | null;
  _direccion: {numero: string, calle: string} | null;
  _capital: number | null;
  _ingresos: number | null;
  _comercial: string | null;
}

export type tEmpresa = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: string | null;
  _direccion: {numero: string, calle: string} | null;
  _capital: number | null;
  _ingresos: number | null;
  _plan: string | null;
}