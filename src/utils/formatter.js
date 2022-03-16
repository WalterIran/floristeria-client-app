import "intl";
import "intl/locale-data/jsonp/en";

export const formatter = new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency: 'HNL'
});