'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async mail(ctx) {
        const body = ctx.request.body

        const html = `<p>Email from: ${body.email}</p>
        <p>${body.message}</p>`

        const mailTo = (process.env.CONTACT_FORM_MAIL) ? process.env.CONTACT_FORM_MAIL : 'fedax10171@ergowiki.com' 

        const mail = await strapi.plugins['email'].services.email.send({
            to: mailTo,
            from: `${body.email} <${mailTo}>`,
            replyTo: body.email,
            subject: 'Message from contact form <mnonna.site>',
            text: body.message,
            html: html,
        });

        const response = {
            body,
            mail,
            status: 200,
            message: "Mail sent successfully. I'll reply soon :)"
        }

        ctx.response.body = response
    }
};
