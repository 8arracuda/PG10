sdApp.controller('LocalStorageCtrl', function ($scope) {

    $scope.localStorage = [];
    $scope.localStorage = localStorage;

    $scope.test = function() {
        alert(JSON.stringify($scope.localStorage));
    };


    $scope.saveOneItem = function() {
        localStorage.setItem('test', 'foo');
        alert('variable test set to foo');
    };

    $scope.loadOneItem = function() {
        alert('test: ' + localStorage.getItem('test'));
    };

    $scope.perf_store100Items = function() {

        var start = new Date().getTime();

        for (i = 0; i < 100; ++i) {

            localStorage.setItem(('test' + i), 'test' + i);

        }

        var end = new Date().getTime();
        var time = end - start;
        alert('Execution time: ' + time);

        for (i = 0; i < 100; ++i) {

            localStorage.removeItem(('test' + i));

        }

    };

    $scope.perf_store1000Items = function() {

        var start = new Date().getTime();

        for (i = 0; i < 1000; ++i) {

            localStorage.setItem(('test' + i), 'test' + i);

        }

        var end = new Date().getTime();
        var time = end - start;
        alert('Execution time: ' + time);

        for (i = 0; i < 1000; ++i) {

            localStorage.removeItem(('test' + i));

        }

    };

});