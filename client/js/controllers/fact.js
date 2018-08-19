angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {
        
        $scope.getDateFact = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
            })
        }

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response 
            })
        }

        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response 
            })
        }
    
    })