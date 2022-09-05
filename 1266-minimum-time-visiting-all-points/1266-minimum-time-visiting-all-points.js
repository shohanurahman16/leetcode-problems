/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let stepCount = 0;
    
    for(let i=0; i < points.length - 1; i++){
        stepCount += Math.max(Math.abs(points[i+1][0] - points[i][0]), Math.abs(points[i+1][1] - points[i][1]))
    }
    
    return stepCount
};