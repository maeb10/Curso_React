import { Router } from "express"
import { createProduct, getProducts, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"


const router = Router()

router.get('/', getProducts)

router.get(
    '/:id',
    param('id')
        .isInt().withMessage('ID no válido'),
    handleInputErrors,
    getProductById
)

router.post(
    '/',
    // Validation
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacío'),
    body('price')
        .isNumeric().withMessage('El precio de Producto es númerico')
        .notEmpty().withMessage('El precio de Producto no puede ir vacío')
        .custom(value => value > 0).withMessage('El precio de Producto es mayor a 0'),
    handleInputErrors,
    createProduct
)

router.put(
    '/:id',
    param('id')
        .isInt().withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacío'),
    body('price')
        .isNumeric().withMessage('El precio de Producto es númerico')
        .notEmpty().withMessage('El precio de Producto no puede ir vacío')
        .custom(value => value > 0).withMessage('El precio de Producto es mayor a 0'),
    body('availability')
        .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateProduct
)

router.patch(
    '/:id',
    param('id')
        .isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateAvailability
)

router.delete(
    '/:id',
    param('id')
        .isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteProduct
)

export default router