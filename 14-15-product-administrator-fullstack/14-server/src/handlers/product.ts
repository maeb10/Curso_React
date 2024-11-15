import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        res.status(200).json({ data: products })
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error: 'Producto no encontrado'
            })
            return
        }

        res.status(200).json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error: 'Producto no encontrado'
            })
            return
        }

        // Update
        await product.update(req.body)

        res.status(200).json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const updateAvailability = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error: 'Producto no encontrado'
            })
            return
        }

        // Update
        product.availability = !product.dataValues.availability
        await product.save()

        res.status(200).json({ data: product })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error: 'Producto no encontrado'
            })
            return
        }

        await product.destroy()

        res.status(200).json({ data: 'Producto Eliminado' })
    } catch (error) {
        console.log(error)
    }
}