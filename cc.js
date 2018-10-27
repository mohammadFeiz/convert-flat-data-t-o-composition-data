
        var model = [{
                id: "0",
                parent: "#"
            },
            {
                id: "00",
                parent: "0"
            },
            {
                id: "01",
                parent: "0"
            },
            {
                id: "000",
                parent: "00"
            },
            {
                id: "001",
                parent: "00"
            },
            {
                id: "010",
                parent: "01"
            },
        ];

        function converToComposition(model) {
            function ctc(parent, com) {
                parent = parent || "#";
                var str = '';
                for (var i = 0; i < this.model.length; i++) {
                    var model = this.model[i];
                    if (model.parent !== parent) {
                        continue;
                    }
                    com.push({
                        id: model.id,
                        childs: []
                    });
                    ctc(model.id, com[com.length - 1].childs);
                }
            }
            var composit = [];
            ctc("#", composit);
            return composit;
        }
        console.log(converToComposition(model));