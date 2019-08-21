<?php
  /*2019. Desafio Folha de São Paulo
          Este foi o código desenvolvido para um desafio da Folha de SP para programadores PHP. O desafio é simples e, provalmente, 
          foi criado para verificar se o candidato sabe programar "o básico".

          O desafio inicial: 

          Levados do planeta Terra por uma nave alienígena, um grupo de 75 engenheiros espera saber qual será o seu destino solucionando 
          um enigma proposto pelos seus novos amigos. As informações que receberam dizem que a espaçonave seguirá pelo espaço até atingir 
          um de cinco sistemas estelares próximos: SIRIUS, LALANDE, PROCION, ALPHA CENTAURI ou BARNARD.


          O local de chegada pode ser conhecido sabendo que as vogais do nome da estrela são atribuídas à uma sequência Fibonacci 
          que começa em 1 e termina em 8, onde A = 1, E = 2, I = 3, O = 5 e U = 8. Se a multiplicação das vogais der o mesmo número 
          que a quantidade de engenheiros, a estrela de destino será conhecida.


          Qual estrela será o destino da espaçonave?
  */
  
  //parametros iniciais para configuracao do desafio
    $stars = ['SIRIUS', 'LALANDE', 'PROCION', 'ALPHA CENTAURI','BARNARD'];
    
    $engineers = 75;
    
    $vowels = [
    "A" => 1,
    "E" => 2,
    "I" => 3,
    "O" => 5,
    "U" => 8,
    ];

  //cálculo dos valores de cada estrela
  foreach ($stars as &$star) {
      $value = preg_replace('/[^aeiou]/i','',$star);
      $result = 1;
      for($i = 0; $i < strlen($value); ++$i) $result *= $vowels[$value[$i]];
      if ($result==$engineers) echo "The target star is ".$star;
  };
?>
