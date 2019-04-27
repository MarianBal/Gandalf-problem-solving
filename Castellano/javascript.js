
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

            no.onclick =function(){
                si.onclick = function(){
                    return pregunta.textContent = ''
                }

                pregunta.textContent = 'Llamá a las aguilas'
            }

        }
    }
}
no.onclick = function(){
    pregunta.textContent = '¿Estás vivo?'

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
