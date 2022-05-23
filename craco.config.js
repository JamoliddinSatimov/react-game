/* eslint-disable no-undef */
const CracoAlias = require("craco-alias")

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "jsconfig",
                baseUrl: ".",
            },
        },
    ],
}
