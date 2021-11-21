import { Schema, model } from "mongoose";

//schemas por subclase
const registroSchema = new Schema({
  _idComercial: {
      type: String
  },
  _idCliente: {
      type: String
  },
  _capitalCliente: {
      type: Number
  },
  _prestamo: {
      type: Number
  },
  _interes: {
      type: Number
  },
  _plazo: {
      type: Date
  }
});
export const Reg = model("registros", registroSchema);

export type tRegistro = {
    _idComercial: string | null,
    _idCliente: string | null,
    _capitalCliente: number | null,
    _prestamo: number | null,
    _interes: number | null,
    _plazo: Date | null,
}