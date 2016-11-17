/**
 * Created by sakurallj on 11/16/16.
 */
angular.module("ltmark",[])
    .controller("markController",function($scope){

    })
    .directive('ltMark', function($http,$compile) {
        return {
            restrict: 'AE',
            scope: {
                newMarkUrl:"@",
                markListUrl:"@",
                customerInputName:"@",
                currentMarksJson:"@"
            },
            templateUrl:function(o,attrs){
                return  "./mark.html";
            },
            link: function(scope, iElement, iAttrs) {
                scope.inputName = scope.customerInputName?scope.customerInputName:"tags";
                scope.isShowContent = true;
                scope.marks = {};//保存标签数据
                scope.marks = {
                    a1: {id: 1, name: "女装 /内衣",child:{
                        a1: {id: 1, name: "个人护理",child:{
                            a1: {id: 1, name: "女装"},
                            a2: {id: 2, name: "包"},
                            a3: {id: 3, name: "个人护理"},
                            a4: {id: 4, name: "眼镜"},
                            a5: {id: 5, name: "电脑办公"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "茶酒"},
                            aa1: {id: 1, name: "女装"},
                            aa2: {id: 2, name: "包"},
                            aa3: {id: 3, name: "个人护理"},
                            aa4: {id: 4, name: "眼镜"},
                            aa5: {id: 5, name: "电脑办公"},
                            aa6: {id: 6, name: "母婴玩具"},
                            aa7: {id: 7, name: "茶酒"},
                            aaa1: {id: 1, name: "女装"},
                            aaa2: {id: 2, name: "包"},
                            aaa3: {id: 3, name: "个人护理"},
                            aaa4: {id: 4, name: "眼镜"},
                            aaa5: {id: 5, name: "电脑办公"},
                            aaa6: {id: 6, name: "母婴玩具"},
                            aaaa7: {id: 7, name: "茶酒"},
                            aaaaa7: {id: 7, name: "茶酒"},
                            aaaaaa7: {id: 7, name: "茶酒"},
                            aaaaaaaa7: {id: 7, name: "茶酒"},
                            aaawwa7: {id: 7, name: "茶酒"},
                            aaa8: {id: 8, name: "生鲜水果"}
                        }},
                        a2: {id: 2, name: "电脑办公",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }},
                        a3: {id: 3, name: "化妆品",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }},
                        a4: {id: 4, name: "腕表",child:{
                            a1: {id: 1, name: "女装"},
                            a2: {id: 2, name: "包"},
                            a3: {id: 3, name: "个人护理"},
                            a4: {id: 4, name: "眼镜"},
                            a5: {id: 5, name: "电脑办公"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "茶酒"},
                            aa1: {id: 1, name: "女装"},
                            aa2: {id: 2, name: "包"},
                            aa3: {id: 3, name: "个人护理"},
                            aa4: {id: 4, name: "眼镜"},
                            aa5: {id: 5, name: "电脑办公"},
                            aa6: {id: 6, name: "母婴玩具"},
                            aa7: {id: 7, name: "茶酒"},
                            aaa1: {id: 1, name: "女装"},
                            aaa2: {id: 2, name: "包"},
                            aaa3: {id: 3, name: "个人护理"}
                        }},
                        a5: {id: 5, name: "手机",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }},
                        a6: {id: 6, name: "母婴玩具",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }},
                        a7: {id: 7, name: "零食",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }},
                        a8: {id: 8, name: "生鲜水果",child:{
                            a1: {id: 1, name: "内衣"},
                            a2: {id: 2, name: "箱包"},
                            a3: {id: 3, name: "化妆品"},
                            a4: {id: 4, name: "腕表"},
                            a5: {id: 5, name: "手机"},
                            a6: {id: 6, name: "母婴玩具"},
                            a7: {id: 7, name: "零食"},
                            a8: {id: 8, name: "生鲜水果"}
                        }}
                    }},
                    a2: {id: 2, name: "女鞋",child:{
                        a1: {id: 1, name: "内衣"},
                        a2: {id: 2, name: "箱包"},
                        a3: {id: 3, name: "化妆品"},
                        a4: {id: 4, name: "腕表"},
                        a5: {id: 5, name: "手机"},
                        a6: {id: 6, name: "母婴玩具"},
                        a7: {id: 7, name: "零食"},
                        a8: {id: 8, name: "生鲜水果"}
                    }},
                    aa4: {id: 4, name: "眼镜"},
                    aa5: {id: 5, name: "电脑办公"},
                    aa6: {id: 6, name: "母婴玩具"},
                    aa7: {id: 7, name: "茶酒"},
                    aaa1: {id: 1, name: "女装"},
                    aaa2: {id: 2, name: "包"},
                    aaa3: {id: 3, name: "个人护理"},
                    aaa4: {id: 4, name: "眼镜"},
                    aaa5: {id: 5, name: "电脑办公"},
                    aaa6: {id: 6, name: "母婴玩具"},
                    aaaa7: {id: 7, name: "茶酒"},
                    aaaaa7: {id: 7, name: "茶酒"},
                    aaaaaa7: {id: 7, name: "茶酒"},
                    aaaaaaaa7: {id: 7, name: "茶酒"},
                    aaawwa7: {id: 7, name: "茶酒"},
                    aaa8: {id: 8, name: "生鲜水果"}
                };
                scope.selectedMarksJsonStr = "";//保存所选的marks字符串 到input
                scope.childMarks = {};//保存右边的mark，用于展示
                scope.top = {};//一级 mark
                scope.isNewMark = false;//标记是否新建mark
                //获得mark list
                $http.get(scope.markListUrl,{data:JSON.stringify({})}, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                })
                .success(function(data){
                    scope.marks = data;
                });
                /**
                 * 用于展示右边的mark
                 * @param key
                 */
                scope.mouseover = function(key){
                    if(key=="newMark"){
                        scope.isNewMark = true;
                    }
                    else{
                        scope.isNewMark = false;
                        scope.top.key = key;
                        scope.top.uid = scope.marks[key].uid;
                        scope.childMarks  = scope.marks[key];
                        //重设isActive为false
                        setTopMarkIsActiveToFalse();
                        //设置当前的isActive为true
                        scope.marks[key].isActive = true;
                        angular.element(".add-input").hide(function(){
                            angular.element(".add-icon").show();
                        });
                    }
                };
                scope.newMarkChild = function($event){
                    scope.newMark = null;
                    angular.element(".add-input").hide(function(){
                    });
                    angular.element(".add-icon").show(function(){
                    });
                    angular.element($event.target).fadeOut(function(){
                        angular.element($event.currentTarget).next().fadeIn();
                    });
                    $event.stopPropagation();
                };

                /**
                 * 删除已选的mark
                 * @param key
                 */
                scope.removeContainerMark = function(key){
                    delete scope.currentMarks[key];
                    scope.selectedMarksJsonStr = JSON.stringify(scope.currentMarks);
                };
                scope.currentMarks = scope.currentMarksJson?JSON.parse(scope.currentMarksJson):{};
                /**
                 * 添加mark
                 * @param $event
                 */
                scope.addMark = function ($event ){
                    if(scope.top.key){
                        var key=scope.top.key, len = arguments.length;
                        var mark = scope.marks[key];
                        if(mark){
                            for (var i =1 ; i <len; i++){
                                key+="_"+arguments[i];
                                mark = mark.child[arguments[i]];
                            }
                            scope.currentMarks[key] = {
                                id:mark.id,
                                name:mark.name
                            }
                        }
                    }
                    scope.selectedMarksJsonStr = JSON.stringify(scope.currentMarks);
                    $event.stopPropagation();
                };
                /**
                 * 提交新建的mark
                 */
                scope.submitNewMark = function(){
                    var len = arguments.length,args=arguments;
                    console.log(scope.marks[scope.top.key]["child"] );
                    if(scope.newMark){
                        var data = {
                            "id":"",
                            "uid":"",
                            "name":scope.newMark,
                            "hierarchy":"",
                            "parentUid":"",
                            "sort":""
                        };
                        if(len>0&&args[0]=="newChildMark"){
                            if(len==1){
                                data.parentUid = scope.top.uid;
                            }
                            else if(len==2){
                                data.parentUid = scope.marks[scope.top.key]["child"][args[1]].uid;
                            }
                        }
                        console.log(data);
                        $http.post(scope.newMarkUrl,{data:JSON.stringify(data)}, {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                            transformRequest: function(data) {
                                return $.param(data);
                            }
                        })
                        .success(function(data){
                            if(data[0]==0){
                                data = JSON.parse(data[1]);
                                if(len>0&&args[0]=="newChildMark"){
                                    if(len==1){
                                        if(!scope.marks[scope.top.key].child){
                                            scope.marks[scope.top.key]["child"] = {};
                                        }
                                        scope.marks[scope.top.key]["child"][""+data["id"]] = data;
                                    }
                                    else if(len==2){
                                        if(! scope.marks[scope.top.key]["child"][args[1]]["child"]){
                                            scope.marks[scope.top.key]["child"][args[1]]["child"] = {};
                                        }
                                        scope.marks[scope.top.key]["child"][args[1]]["child"][""+data["id"]] = data;
                                    }
                                }
                                else{
                                    scope.marks[""+data["id"]] = data;
                                }
                                scope.newMark = null;
                            }
                        });
                    }
                };
                scope.cancelNewMark = function(){
                    angular.element(".add-input").hide(function(){
                        angular.element(".add-icon").show();
                    });
                    scope.newMark = null;
                };
                scope.collapse = function(){
                    scope.isShowContent = !scope.isShowContent;
                };
                /**
                 * 重置所有一级的isActive
                 */
                function setTopMarkIsActiveToFalse(){
                    for(var key in scope.marks){
                        scope.marks[key].isActive = false;
                    }
                }
            }
        };
    });