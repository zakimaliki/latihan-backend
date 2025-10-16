import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Latihan Backend API',
            version: '1.0.0',
            description: 'API documentation for Latihan Backend application',
            contact: {
                name: 'Zaki',
                email: 'your-email@example.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 4000}`,
                description: 'Development server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            schemas: {
                Product: {
                    type: 'object',
                    required: ['name', 'stock', 'price'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Product ID',
                            example: 1
                        },
                        name: {
                            type: 'string',
                            description: 'Product name',
                            example: 'Laptop Gaming'
                        },
                        stock: {
                            type: 'integer',
                            description: 'Product stock quantity',
                            example: 10
                        },
                        price: {
                            type: 'number',
                            description: 'Product price',
                            example: 15000000
                        },
                        photo: {
                            type: 'string',
                            description: 'Product photo URL',
                            example: 'https://res.cloudinary.com/example/image.jpg'
                        },
                        description: {
                            type: 'string',
                            description: 'Product description',
                            example: 'High performance gaming laptop'
                        }
                    }
                },
                User: {
                    type: 'object',
                    required: ['email', 'password', 'fullname'],
                    properties: {
                        id: {
                            type: 'string',
                            format: 'uuid',
                            description: 'User ID',
                            example: '550e8400-e29b-41d4-a716-446655440000'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                            example: 'user@example.com'
                        },
                        fullname: {
                            type: 'string',
                            description: 'User full name',
                            example: 'John Doe'
                        },
                        role: {
                            type: 'string',
                            description: 'User role',
                            example: 'user',
                            enum: ['user', 'admin']
                        }
                    }
                },
                UserRegister: {
                    type: 'object',
                    required: ['email', 'password', 'fullname'],
                    properties: {
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                            example: 'user@example.com'
                        },
                        password: {
                            type: 'string',
                            minLength: 6,
                            description: 'User password',
                            example: 'password123'
                        },
                        fullname: {
                            type: 'string',
                            description: 'User full name',
                            example: 'John Doe'
                        }
                    }
                },
                UserLogin: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                            example: 'user@example.com'
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                            example: 'password123'
                        }
                    }
                },
                ApiResponse: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            example: 'success'
                        },
                        statusCode: {
                            type: 'integer',
                            example: 200
                        },
                        message: {
                            type: 'string',
                            example: 'Operation successful'
                        },
                        data: {
                            type: 'object',
                            description: 'Response data'
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            example: 'error'
                        },
                        statusCode: {
                            type: 'integer',
                            example: 400
                        },
                        message: {
                            type: 'string',
                            example: 'Error message'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js'], // Path to the API routes files
};

const specs = swaggerJSDoc(options);

export default specs;
