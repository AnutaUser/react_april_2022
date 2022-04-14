import Joi from 'joi';

const carValidator = Joi.object({
    // model: Joi.string().min(2).max(20).required().messages({
    //     'string.empty': 'Поле model не може бути пустим',
    //     'string.min': 'Поле model повинне містити мінімум 2 символи',
    //     'string.max': 'Поле model може містити максимум 20 символів'
    // }),

    model: Joi.string().regex(/^[a-zA-Zа-яА-ЯїЇьіІ]{1,20}$/).required().messages({     //регулярка
        'string.pattern.base': 'Тільки букви min 1 символ, max 20.'
    }),

    price: Joi.number().max(1000000).min(1).required().messages({
        'number.max': 'Максимальна ціна 1 000 000',
        'number.min': 'Мінімальна ціна 1',
        'number.empty': 'Поле, price, не може бути пустим'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator};