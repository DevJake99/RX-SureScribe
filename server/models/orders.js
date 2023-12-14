const { Schema, model } = require('mongoose');

const ordersSchema = new Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    physician: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prescriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Prescription'
        }
    ]
});

const Order = mongoose.model('Order', ordersSchema);
module.exports = Order