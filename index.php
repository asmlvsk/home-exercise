<?php
    include 'Parser.php';

    if($_SERVER['REQUEST_URI'] === '/') {
        include 'static/index.html';
    } else {
        if ($_SERVER['REQUEST_URI'] === '/getEmployees') {
            $parser = new Parser();
            echo json_encode($parser->get());
        }
    }
