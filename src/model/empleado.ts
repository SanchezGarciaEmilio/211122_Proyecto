import { Schema, model } from "mongoose";
import { direccion } from "../classes/empleados/empleado";
//schemas por subclase
const empleadoSchema = new Schema({
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
    type: { movil: String, fijo: String },
  },
  _direccion: {
    type: Array,
    default: []
  },
  _iban: {
    type: String,
  },
  _sueldo: {
    type: Number,
  },
  _fecha: {
    type: Date,
  },
  _nivel: {
    type: String,
  },
  _empresa: {
    type: String,
  },
  _horas: {
    type: Number,
  },
  _minimo: {
    type: Boolean, //mide si han cumplido el minimo de horas mensuales de trabajo
  }
});
export const Emp = model("empleados", empleadoSchema);

export type tTrabajadores = {
  _id: string;
  _tipoObjeto: string;
  _nombre: string;
  _telefono: { movil: string, fijo: string| null };
  _direccion: direccion[];
  _iban: string;
  _sueldo: number;
  _fecha: Date;
  _nivel: string;
  _empresa: string;
  _minimo: boolean; 
  _horas: number,
};

export type tEmpleado = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: { movil: string, fijo: string| null } | null;
  _direccion: direccion[] | null;
  _iban: string | null;
  _sueldo: number | null;
  _fecha: Date | null;
};

export type tDirectivo = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: { movil: string, fijo: string| null } | null;
  _direccion: direccion[] | null;
  _iban: string | null;
  _sueldo: number | null;
  _fecha: Date | null;
  _nivel: string | null;
};

export type tLimpiador = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: { movil: string, fijo: string| null } | null;
  _direccion: direccion[] | null;
  _iban: string | null;
  _sueldo: number | null;
  _fecha: Date | null;
  _empresa: string | null;
};

export type tComercial = {
  _id: string | null;
  _tipoObjeto: string | null;
  _nombre: string | null;
  _telefono: { movil: string, fijo: string | null } | null;
  _direccion: direccion[] | null;
  _iban: string | null;
  _sueldo: number | null;
  _fecha: Date | null;
  _horas: number | null;
  _minimo: boolean | null;
};

export type tComercial2 = {
  _id: string;
  _tipoObjeto: string;
  _nombre: string;
  _telefono: { movil: string, fijo: string | null };
  _direccion: direccion[];
  _iban: string;
  _sueldo: number;
  _fecha: Date;
  _horas: number;
  _minimo: boolean;
};
