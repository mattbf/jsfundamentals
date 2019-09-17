// Transposes an Array
var transpose = function(A) {
        var w = A.length || 0;
        var h = A[0] instanceof Array ? A[0].length : 0;
        let t = []
        if(h === 0 || w === 0) { return []; }

        for(i=0; i<h; i++) {
        t[i] = [];
        for(j=0; j<w; j++) {
          t[i][j] = A[j][i];
        }
      }
        return t
    };
