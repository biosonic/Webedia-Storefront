import {apiSylius} from '~/plugins/api-sylius'

export const actions = {
  async login (params = {}) {
    const email = params.email;
    const pass = params.pass;
    const rq = await apiSylius.post('catalog/vue_storefront_catalog/product/_search?_source_exclude=%2A.msrp_display_actual_price_type%2Crequired_options%2Cupdated_at%2Ccreated_at%2Cattribute_set_id%2Coptions_container%2Cmsrp_display_actual_price_type%2Chas_options%2Cstock.manage_stock%2Cstock.use_config_min_qty%2Cstock.use_config_notify_stock_qty%2Cstock.stock_id%2Cstock.use_config_backorders%2Cstock.use_config_enable_qty_inc%2Cstock.enable_qty_increments%2Cstock.use_config_manage_stock%2Cstock.use_config_min_sale_qty%2Cstock.notify_stock_qty%2Cstock.use_config_max_sale_qty%2Cstock.use_config_max_sale_qty%2Cstock.qty_increments%2Cstock.stock_status_changed_auto%2Cstock.show_default_notification_message%2Cstock.use_config_qty_increments%2Cstock.is_decimal_divided%2Csmall_image%2Csgn%2C%2A.sgn&from=0&request=%7B%22query%22%3A%7B%22bool%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22visibility%22%3A%5B2%2C3%2C4%5D%7D%7D%2C%7B%22terms%22%3A%7B%22status%22%3A%5B0%2C1%5D%7D%7D%2C%7B%22terms%22%3A%7B%22category_ids%22%3A%5B6%5D%7D%7D%5D%7D%7D%7D%7D%2C%22aggs%22%3A%7B%22agg_terms_color%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22color%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_color_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22color_options%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_size%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22size%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_size_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22size_options%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_price%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22price%22%7D%7D%2C%22agg_range_price%22%3A%7B%22range%22%3A%7B%22field%22%3A%22price%22%2C%22ranges%22%3A%5B%7B%22from%22%3A0%2C%22to%22%3A5000%7D%2C%7B%22from%22%3A5000%2C%22to%22%3A10000%7D%2C%7B%22from%22%3A10000%2C%22to%22%3A15000%7D%2C%7B%22from%22%3A15000%7D%5D%7D%7D%2C%22agg_terms_erin_recommends%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22erin_recommends%22%2C%22size%22%3A10%7D%7D%2C%22agg_terms_erin_recommends_options%22%3A%7B%22terms%22%3A%7B%22field%22%3A%22erin_recommends_options%22%2C%22size%22%3A10%7D%7D%7D%7D&size=50&sort=');
    const items = rq.hits.hits.map((_item)=>_item._source);
    return items;
  },
}