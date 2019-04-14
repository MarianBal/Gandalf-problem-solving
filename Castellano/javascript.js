
var pregunta = document.getElementById('pregunta')

var si = document.getElementById('si');
var no = document.getElementById('no');


si.onclick = function(){
    pregunta.textContent = '¿Puede resolverlo alguien más?';

    si.onclick = function(){
        pregunta.textContent = '¡Genial! ¿Estás vivo?'
    
        si.onclick = function(){
            pregunta.textContent = '¿Estás en peligro?'
    
            si.onclick = function(){
                pregunta.textContent = '¿Hay espadas que puedas usar?'
    
                si.onclick = function(){
    
                    no.onclick = function(){
                        return pregunta.textContent = ''
                    }
    
                    return pregunta.textContent = '¡Genial!'
                }
                no.onclick = function(){
                    pregunta.textContent = '¿Funciona la magia?'
    
                    si.onclick = function(){
                        no.onclick = function(){
                            return pregunta.textContent = ''
                        }
                        return pregunta.textContent = '¡Genial!'
                    }
                    no.onclick = function(){
    
                        si.onclick = function(){
                            return pregunta.textContent = ''
                        }
    
                        return pregunta.textContent = '¡Llamá a las aguilas!'
                    }
    
    
                }
            }
    
            no.onclick = function(){
    
                si.onclick = function(){
                    return pregunta.textContent = ''
                }
                return pregunta.textContent = '¡Genial!'
            }
        }
    
        no.onclick = function(){
    
            si.onclick = function(){
                return pregunta.textContent = ''
            }
    
            return pregunta.textContent = 'Resucitá'
        }
    }

    no.onclick = function(){
        pregunta.textContent = '¿Qué hay de los Hobbits?'

        si.onclick = function(){
            pregunta.textContent = '¡Genial! ¿Estás vivo?'
        
            si.onclick = function(){
                pregunta.textContent = '¿Estás en peligro?'
        
                si.onclick = function(){
                    pregunta.textContent = '¿Hay espadas que puedas usar?'
        
                    si.onclick = function(){
        
                        no.onclick = function(){
                            return pregunta.textContent = ''
                        }
        
                        return pregunta.textContent = '¡Genial!'
                    }
                    no.onclick = function(){
                        pregunta.textContent = '¿Funciona la magia?'
        
                        si.onclick = function(){
                            no.onclick = function(){
                                return pregunta.textContent = ''
                            }
                            return pregunta.textContent = '¡Genial!'
                        }
                        no.onclick = function(){
        
                            si.onclick = function(){
                                return pregunta.textContent = ''
                            }
        
                            return pregunta.textContent = '¡Llamá a las aguilas!'
                        }
        
        
                    }
                }
        
                no.onclick = function(){
        
                    si.onclick = function(){
                        return pregunta.textContent = ''
                    }
                    return pregunta.textContent = '¡Genial!'
                }
            }
        
            no.onclick = function(){
        
                si.onclick = function(){
                    return pregunta.textContent = ''
                }
        
                return pregunta.textContent = 'Resucitá'
            }
        }

        no.onclick = function(){
            pregunta.textContent = '¿Funciona la magia?'

            si.onclick = function(){
                pregunta.textContent = '¡Genial! ¿Estás vivo?'
            
                si.onclick = function(){
                    pregunta.textContent = '¿Estás en peligro?'
            
                    si.onclick = function(){
                        pregunta.textContent = '¿Hay espadas que puedas usar?'
            
                        si.onclick = function(){
            
                            no.onclick = function(){
                                return pregunta.textContent = ''
                            }
            
                            return pregunta.textContent = '¡Genial!'
                        }
                        no.onclick = function(){
                            pregunta.textContent = '¿Funciona la magia?'
            
                            si.onclick = function(){
                                no.onclick = function(){
                                    return pregunta.textContent = ''
                                }
                                return pregunta.textContent = '¡Genial!'
                            }
                            no.onclick = function(){
            
                                si.onclick = function(){
                                    return pregunta.textContent = ''
                                }
            
                                return pregunta.textContent = '¡Llamá a las aguilas!'
                            }
            
            
                        }
                    }
            
                    no.onclick = function(){
            
                        si.onclick = function(){
                            return pregunta.textContent = ''
                        }
                        return pregunta.textContent = 'Great!'
                    }
                }
            
                no.onclick = function(){
            
                    si.onclick = function(){
                        return pregunta.textContent = ''
                    }
            
                    return pregunta.textContent = 'Resurrect'
                }
            }

            no.onclick =function(){
                si.onclick = function(){
                    return pregunta.textContent = ''
                }

                pregunta.textContent = 'Call the eagles'
            }

        }
    }
}
no.onclick = function(){
    pregunta.textContent = 'Are you alive?'

    si.onclick = function(){
        pregunta.textContent = 'Are you in danger?'

        si.onclick = function(){
            pregunta.textContent = 'Are swords of use here?'

            si.onclick = function(){

                no.onclick = function(){
                    return pregunta.textContent = ''
                }

                return pregunta.textContent = 'Great!'
            }
            no.onclick = function(){
                pregunta.textContent = 'Does magic works?'

                si.onclick = function(){
                    no.onclick = function(){
                        return pregunta.textContent = ''
                    }
                    return pregunta.textContent = 'Great!'
                }
                no.onclick = function(){

                    si.onclick = function(){
                        return pregunta.textContent = ''
                    }

                    return pregunta.textContent = 'Call the eagles!'
                }


            }
        }

        no.onclick = function(){

            si.onclick = function(){
                return pregunta.textContent = ''
            }
            return pregunta.textContent = 'Great!'
        }
    }

    no.onclick = function(){

        si.onclick = function(){
            return pregunta.textContent = ''
        }

        return pregunta.textContent = 'Resurrect'
    }
}
