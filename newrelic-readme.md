# New Relic

### Enable

To enable New Relic go to config/your/environment and enable switch

    {
        "new_relic": true,
    }

### License Key

Fill up the New Relic license key in newrelic.js file at the project root


    exports.config = {
        /**
         * Array of application names.
         */
        app_name: ['YOUR_APP_NAME'],
        /**
         * Your New Relic license key.
         */
        license_key: 'YOUR_LICENSE_KEY',
        logging: {
            /**
             * Level at which to log. 'trace' is most useful to New Relic when diagnosing
             * issues with the agent, 'info' and higher will impose the least overhead on
             * production applications.
             */
            level: 'info'
        },
        /**
         * When true, all request headers except for those listed in attributes.exclude
         * will be captured for all traces, unless otherwise specified in a destination's
         * attributes include/exclude lists.
         */
        allow_all_headers: true,
        attributes: {
            /**
             * Prefix of attributes to exclude from all destinations. Allows * as wildcard
             * at end.
             *
             * NOTE: If excluding headers, they must be in camelCase form to be filtered.
             *
             * @env NEW_RELIC_ATTRIBUTES_EXCLUDE
             */
            exclude: [
                'request.headers.cookie',
                'request.headers.authorization',
                'request.headers.proxyAuthorization',
                'request.headers.setCookie*',
                'request.headers.x*',
                'response.headers.cookie',
                'response.headers.authorization',
                'response.headers.proxyAuthorization',
                'response.headers.setCookie*',
                'response.headers.x*'
            ]
        },
        display_name: ['YOUR_DISPLAY_NAME']
    };
