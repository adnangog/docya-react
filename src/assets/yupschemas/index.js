import * as yup from "yup";
import {requiredMes, emailValid, passMinLength} from '../texts/messages';

export const email = yup.string().email(emailValid);

export const password = yup.string().min(6, passMinLength).max(255);

export const required = yup.string().required(requiredMes);