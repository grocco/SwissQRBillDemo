/*
 * Swiss QR Bill Generator
 * Copyright (c) 2022 Manuel Bleichenbacher
 * Licensed under MIT License
 * https://opensource.org/licenses/MIT
 */

import { FieldFormatter } from './field-formatter';
import { formatIBAN, formatISOReference, formatQRReference, whiteSpaceRemoved, whiteSpaceRemovedAndUpperCase } from './payments';
import { QrBill } from "../qrbill-api/qrbill";
import _ from 'lodash';

export class PaymentValidationError extends Error {
}

// Helper functions for modying bills

/**
 * Returns a new bill instance with the field at `path` changed to `value`
 * @param bill the bill to copy
 * @param path the path to the modified field
 * @param value the new value for the field
 * @returns new modified bill instance
 */
export function updateBillField(bill: QrBill, path: string, value: any): QrBill {
  bill = cloneBill(bill);
  _.set(bill, path, value);
  return bill;
}

export function cloneBill(bill: QrBill): QrBill {
  return {
    version: bill.version,
    amount: bill.amount,
    currency: bill.currency,
    account: bill.account,
    creditor: bill.creditor !== undefined ? Object.assign({}, bill.creditor) : undefined,
    reference: bill.reference,
    unstructuredMessage: bill.unstructuredMessage,
    billInformation: bill.billInformation,
    debtor: bill.debtor !== undefined ? Object.assign({}, bill.debtor) : undefined,
    format: bill.format !== undefined ? Object.assign({}, bill.format) : undefined,
  };
}

class IBANFormatter implements FieldFormatter {
  formattedValue(rawValue: any): string {
    return formatIBAN(rawValue);
  }

  rawValue(formattedValue: string): any {
    return whiteSpaceRemoved(formattedValue);
  }
}

export const ibanFormatter = new IBANFormatter();


class ReferenceFormatter implements FieldFormatter {
  formattedValue(rawValue: any): string {

    if (rawValue === undefined)
      return '';
      
    let cleanedValue = whiteSpaceRemovedAndUpperCase(rawValue.toString());

    if (cleanedValue.startsWith('RF'))
      return formatISOReference(rawValue);
    
    if (/^\d+$/.test(cleanedValue))
      return formatQRReference(rawValue);

    return rawValue.toString().trim();
  }

  rawValue(formattedValue: string): any {
    return whiteSpaceRemoved(formattedValue);
  }
}

export const referenceFormatter = new ReferenceFormatter();
