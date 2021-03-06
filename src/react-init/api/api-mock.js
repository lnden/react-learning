/**
 * 产品列表
 */
const products = {
    "http_code": 200,
    "data": {
        "msg": "获取成功",
        "data": [
            {
                "product_id": 1,
                "product_name": "PaiBot（2G/32G)",
                "product_price": 2999,
                "commission": 200
            },
            {
                "product_id": 2,
                "product_name": "PaiPad（2G/32G)",
                "product_price": 1999,
                "commission": 100
            },
            {
                "product_id": 3,
                "product_name": "PaiBand",
                "product_price": 299,
                "commission": 30
            },
            {
                "product_id": 4,
                "product_name": "奇妙发现",
                "product_price": 599,
                "commission": 50
            },
            {
                "product_id": 5,
                "product_name": "奇妙电路",
                "product_price": 599,
                "commission": 50
            },
            {
                "product_id": 6,
                "product_name": "七彩世界",
                "product_price": 499,
                "commission": 40
            },
            {
                "product_id": 7,
                "product_name": "七彩海洋",
                "product_price": 499,
                "commission": 40
            },
            {
                "product_id": 8,
                "product_name": "魔法数学",
                "product_price": 499,
                "commission": 40
            },
            {
                "product_id": 9,
                "product_name": "魔幻解谜",
                "product_price": 499,
                "commission": 40
            },
            {
                "product_id": 10,
                "product_name": "麦斯丝",
                "product_price": 299,
                "commission": 20
            },
            {
                "product_id": 11,
                "product_name": "hello 编程",
                "product_price": 299,
                "commission": 20
            },
            {
                "product_id": 12,
                "product_name": "涂涂世界",
                "product_price": 299,
                "commission": 20
            },
            {
                "product_id": 13,
                "product_name": "哈泥海洋",
                "product_price": 299,
                "commission": 20
            },
            {
                "product_id": 14,
                "product_name": "淘淘向右走",
                "product_price": 159,
                "commission": 10
            }
        ]
    }
}


/**
 * 记录-已通过
 */
const recordPassed = {
    "http_code": 200,
    "data": {
        "data": [
            {
                "sales_id": 527,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "测试1111",
                "customers_phone": "12313123131",
                "product": [
                    {
                        "product_id": 2,
                        "product_name": "PaiPad（2G/32G)",
                        "quantity": "1"
                    },
                    {
                        "product_id": 3,
                        "product_name": "PaiBand",
                        "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/af7514e555dd525bac5000b0dfb5a5f57b99c2c3.jpg\"]",
                "product_price": 2298,
                "commission": 130,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:43:22",
                "type_name": "已通过"
            },
            {
                "sales_id": 526,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "测试2222",
                "customers_phone": "12313131123",
                "product": [
                    {
                        "product_id": 1,
                        "product_name": "PaiBot（2G/32G)",
                        "quantity": "1"
                    },
                    {
                        "product_id": 2,
                        "product_name": "PaiPad（2G/32G)",
                        "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/d52a7c73676a1f5e4cb8015544cf6404f4923eee.jpg\"]",
                "product_price": 4998,
                "commission": 300,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:42:46",
                "type_name": "已通过"
            },
            {
                "sales_id": 525,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "cangdu",
                "customers_phone": "12131232131",
                "product": [
                    {
                    "product_id": 1,
                    "product_name": "PaiBot（2G/32G)",
                    "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/fa2b435d3dca0cb43d82790777121648377f418c.jpg\"]",
                "product_price": 2999,
                "commission": 200,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:42:05",
                "type_name": "已通过"
            }
        ],
        "totalPage": 1,
        "currentPage": 1
    }
}


/**
 * 记录-待审核
 */
const recordAudied = {
    "http_code": 200,
    "data": {
        "data": [
            {
                "sales_id": 527,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "测试2323",
                "customers_phone": "12313123131",
                "product": [
                    {
                        "product_id": 2,
                        "product_name": "PaiPad（2G/32G)",
                        "quantity": "1"
                    },
                    {
                        "product_id": 3,
                        "product_name": "PaiBand",
                        "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/af7514e555dd525bac5000b0dfb5a5f57b99c2c3.jpg\"]",
                "product_price": 2298,
                "commission": 130,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:43:22",
                "type_name": "等审核"
            }
        ],
    "totalPage": 1,
    "currentPage": 1
    }
}


/**
 * 记录-未通过
 */
const recordFailed = {
    "http_code": 200,
    "data": {
        "data": [
            {
                "sales_id": 527,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "测试",
                "customers_phone": "12313123131",
                "product": [
                    {
                        "product_id": 2,
                        "product_name": "PaiPad（2G/32G)",
                        "quantity": "1"
                    },
                    {
                        "product_id": 3,
                        "product_name": "PaiBand",
                        "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/af7514e555dd525bac5000b0dfb5a5f57b99c2c3.jpg\"]",
                "product_price": 2298,
                "commission": 130,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:43:22",
                "type_name": "未通过"
            },
            {
                "sales_id": 526,
                "register_user_id": 385,
                "sales_money": 12,
                "customers_name": "客户3453",
                "customers_phone": "12313131123",
                "product": [
                    {
                        "product_id": 1,
                        "product_name": "PaiBot（2G/32G)",
                        "quantity": "1"
                    },
                    {
                        "product_id": 2,
                        "product_name": "PaiPad（2G/32G)",
                        "quantity": "1"
                    }
                ],
                "invoice": "[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/d52a7c73676a1f5e4cb8015544cf6404f4923eee.jpg\"]",
                "product_price": 4998,
                "commission": 300,
                "is_closed": "OPEN",
                "type": "UNAUDIT",
                "content": null,
                "created_at": "2017.01.10 20:42:46",
                "type_name": "未通过"
            }
        ],
        "totalPage": 1,
        "currentPage": 1
    }
}

/**
 * 体现余额
 */
const balance = {
    "http_code": 200,
    "data": {
        "msg": "获取成功",
        "data": {
            "balance": 60,
            "register_user_id": 385
        }
    }
}