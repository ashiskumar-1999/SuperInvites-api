import mongoose from 'mongoose'

const campaignSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120
        },
        tags: [{
            type: String
        }],
    },
    { timestamps: true }
)

export const Campaign = mongoose.model('campaign', campaignSchema)