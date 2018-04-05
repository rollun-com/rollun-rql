define(
    [
        'dojo/_base/declare',
        "exports",
        "./util/contains",
        './Parser-v2'
    ],
    function (declare,
              exports,
              contains,
              RqlParser) {
        declare('RqlQuery', {}, {
            parser: new RqlParser(),
            knownOperators: [
                "sort",
                "match",
                "in",
                "out",
                "or",
                "and",
                "select",
                "contains",
                "excludes",
                "values",
                "limit",
                "distinct",
                "recurse",
                "aggregate",
                "between",
                "sum",
                "mean",
                "max",
                "min",
                "count",
                "first",
                "one",
                "eq",
                "ne",
                "le",
                "ge",
                "lt",
                "gt",
                'not'
            ],
            knownScalarOperators: [
                "mean",
                "sum",
                "min",
                "max",
                "count",
                "first",
                "one"
            ],
            arrayMethods: [
                "forEach",
                "reduce",
                "map",
                "filter",
                "indexOf",
                "some",
                "every"
            ],

            constructor: function (seed, params) {//TODO: rewrite to work with dedicated node object
                if (typeof seed === 'string') {
                    return this.parser.parse(seed, params);
                }
                if (seed && seed.name && seed.args) {
                    this.name
                }
            },
        })
    });