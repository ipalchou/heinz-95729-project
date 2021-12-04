/**
 * @param {cartPgRepo} cartRepo
 */
function DeletecartFactory(deps) {
    'use strict'

    const { cartRepo } = deps

    const deleteCart = async (ctx) => {

        const logger = ctx.request.state.logger
        console.log(ctx.state.session.id)
        try {
        
            const cart = await cartRepo.delete.byId(ctx.state.session.id, ctx.params.productid)

            if (cart) {

                ctx.response.status = 200
                // ctx.response.body = cart
            } else {
                ctx.response.status = 404
            }
        } catch (err) {
            logger.emit('product_read_error', 'error', { err })
            throw new Error('Failed to read product with uid ' + ctx.params.productid)
        }
    }

    return { deleteCart }
}

module.exports = DeletecartFactory
