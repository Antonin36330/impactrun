/* eslint-disable */
export type Schema = {
  'campaigns': {
    plain: {
      'id': number;
      'name': string;
      'start_date': string;
      'end_date': string;
    };
    nested: {};
    flat: {};
  };
  'comments': {
    plain: {
      'id': number;
      'user_id': number;
      'product_id': number;
      'comment_text': string;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'product': Schema['products']['plain'] & Schema['products']['nested'];
    };
    flat: {
      'user:id': number;
      'user:name': string;
      'user:email': string;
      'user:role': string;
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
    };
  };
  'locations': {
    plain: {
      'id': number;
      'name': string;
      'city': string;
      'country': string;
    };
    nested: {};
    flat: {};
  };
  'orders': {
    plain: {
      'id': number;
      'user_id': number;
      'order_date': string;
      'total_amount': number;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
    };
    flat: {
      'user:id': number;
      'user:name': string;
      'user:email': string;
      'user:role': string;
    };
  };
  'products': {
    plain: {
      'id': number;
      'name': string;
      'description': string;
      'price': number;
    };
    nested: {};
    flat: {};
  };
  'reviews': {
    plain: {
      'id': number;
      'user_id': number;
      'product_id': number;
      'rating': number;
    };
    nested: {
      'user': Schema['users']['plain'] & Schema['users']['nested'];
      'product': Schema['products']['plain'] & Schema['products']['nested'];
    };
    flat: {
      'user:id': number;
      'user:name': string;
      'user:email': string;
      'user:role': string;
      'product:id': number;
      'product:name': string;
      'product:description': string;
      'product:price': number;
    };
  };
  'users': {
    plain: {
      'id': number;
      'name': string;
      'email': string;
      'role': string;
    };
    nested: {};
    flat: {};
  };
};
