 iterate(obj, stack) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    this.iterate(obj[property], stack + "." + property);
                } else {
                    console.log("ITERATE => ", "[" + stack + "." + property + "]", property + "   " + obj[property]);
                }
            }
        }
    }
