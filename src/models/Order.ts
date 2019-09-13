import {
  Address,
  SearchCriteria,
  ParentItemElement,
  Payment,
  StatusHistory,
  ItemExtensionAttributes
} from '.';

export interface OrderData {
  items: Order[];
  search_criteria: SearchCriteria;
  total_count: number;
}

export interface Order {
  applied_rule_ids?: string;
  base_currency_code: string;
  base_discount_amount: number;
  base_discount_invoiced?: number;
  base_grand_total: number;
  base_discount_tax_compensation_amount: number;
  base_discount_tax_compensation_invoiced?: number;
  base_shipping_amount: number;
  base_shipping_discount_amount: number;
  base_shipping_discount_tax_compensation_amnt: number;
  base_shipping_incl_tax: number;
  base_shipping_invoiced?: number;
  base_shipping_tax_amount: number;
  base_subtotal: number;
  base_subtotal_incl_tax: number;
  base_subtotal_invoiced?: number;
  base_tax_amount: number;
  base_tax_invoiced?: number;
  base_total_due: number;
  base_total_invoiced?: number;
  base_total_invoiced_cost?: number;
  base_total_paid?: number;
  base_to_global_rate: number;
  base_to_order_rate: number;
  billing_address_id: number;
  created_at: Date;
  customer_dob?: Date;
  customer_email: string;
  customer_firstname: string;
  customer_gender?: number;
  customer_group_id: number;
  customer_id: number;
  customer_is_guest: number;
  customer_lastname: string;
  customer_note_notify: number;
  discount_amount: number;
  discount_invoiced?: number;
  entity_id: number;
  global_currency_code: string;
  grand_total: number;
  discount_tax_compensation_amount: number;
  discount_tax_compensation_invoiced?: number;
  increment_id: string;
  is_virtual: number;
  order_currency_code: string;
  protect_code: string;
  quote_id: number;
  shipping_amount: number;
  shipping_description: string;
  shipping_discount_amount: number;
  shipping_discount_tax_compensation_amount: number;
  shipping_incl_tax: number;
  shipping_invoiced?: number;
  shipping_tax_amount: number;
  state: string;
  status: string;
  store_currency_code: string;
  store_id: number;
  store_name: string;
  store_to_base_rate: number;
  store_to_order_rate: number;
  subtotal: number;
  subtotal_incl_tax: number;
  subtotal_invoiced?: number;
  tax_amount: number;
  tax_invoiced?: number;
  total_due: number;
  total_invoiced?: number;
  total_item_count: number;
  total_paid?: number;
  total_qty_ordered: number;
  updated_at: Date;
  weight: number;
  items: ParentItemElement[];
  billing_address: Address;
  payment: Payment;
  status_histories: StatusHistory[];
  extension_attributes: ItemExtensionAttributes;
  adjustment_negative?: number;
  adjustment_positive?: number;
  base_adjustment_negative?: number;
  base_adjustment_positive?: number;
  base_discount_refunded?: number;
  base_discount_tax_compensation_refunded?: number;
  base_shipping_refunded?: number;
  base_shipping_tax_refunded?: number;
  base_subtotal_refunded?: number;
  base_tax_refunded?: number;
  base_total_offline_refunded?: number;
  base_total_refunded?: number;
  discount_refunded?: number;
  discount_tax_compensation_refunded?: number;
  shipping_refunded?: number;
  shipping_tax_refunded?: number;
  subtotal_refunded?: number;
  tax_refunded?: number;
  total_offline_refunded?: number;
  total_refunded?: number;
  email_sent?: number;
  remote_ip?: string;
  base_discount_canceled?: number;
  base_shipping_canceled?: number;
  base_subtotal_canceled?: number;
  base_tax_canceled?: number;
  base_total_canceled?: number;
  discount_canceled?: number;
  edit_increment?: number;
  relation_child_id?: string;
  relation_child_real_id?: string;
  shipping_canceled?: number;
  subtotal_canceled?: number;
  tax_canceled?: number;
  total_canceled?: number;
  original_increment_id?: string;
  relation_parent_id?: string;
  relation_parent_real_id?: string;
}