
# Sample API Reference Documentation

!!! note
    This is just a sample documentation.

## Product Inventory API

Name: Get All Products

**Description**  

Retrieves a paginated list of all active product records in the system. Optional query parameters (category in this sample) can be used to filter the results.

**Base URL**  
https://api.yourcompany.com/v1

**Endpoint Details**  

| Method | Path | Description |
| :--- | :--- | :--- |
| **GET** | `/products` | Retrieves the list of products. |

**Parameters**

| Name | Type | Description | Required | Default |
| :--- | :--- | :--- | :--- | :--- |
| **`limit`** | `integer` | Maximum number of results to return per page. | No | 10 |
| **`offset`** | `integer` | The number of records to skip (used for pagination). | No | 0 |
| **`category`** | `string` | Filters products by their primary category. | No | All |


**Status**

Satus: 200 OK (Success)

**Response Body**

Returns a list of products and pagination metadata.

```json
{
  "total": 150,
  "limit": 10,
  "offset": 0,
  "data": [
    {
      "product_id": "PRD-4521",
      "name": "Standard Widget1",
      "price": 19.99,
      "stock_count": 50,
      "is_active": true
    }
    {
      "product_id": "PRD-4522",
      "name": "Standard Widget2",
      "price": 19.99,
      "stock_count": 50,
      "is_active": true
    }
  ]
}
```

### Additonal Info

The terminologies like total, limit, offset, and data are standard conventions used, specifically for handling pagination.  
The pagination fields - total, limit, offset, data - are used to manage a large dataset that is too big to return in a single response (e.g., if you have 10,000 products).

**Total**: This is the total number of all available records in the entire database that match the query, not just the ones returned in the current response.  
**Category**: The category parameter comes from the imaginary requirements of the Product Inventory Service.  
**Data**: This is the primary key that holds the actual list of product objects (the items being requested).
