<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119776285-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-119776285-1');
    </script>

    <title>Conan Exiles Interactive Map</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="The best interactive map for Conan Exiles out there. Resources. Locations. Thralls. And more!"/>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- Custom styles -->
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/buttons.css">
    <link rel="stylesheet" href="styles/modals.css">
    <link rel="stylesheet" href="styles/groupedlayercontrol.css">
    <link rel="stylesheet" href="styles/easy-button.css">
    <link rel="stylesheet" href="styles/bootstrap.css">
    <!-- Vendor styles -->
    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="styles/leaflet.css">
    <link rel="stylesheet" href="vendor/Leaflet.MousePosition/L.Control.MousePosition.css">
    <link rel="stylesheet" href="styles/leaflet.contextmenu.css">
    <link rel="stylesheet" href="https://alertifyjs.com/build/css/alertify.css">
    <link rel="stylesheet" href="https://alertifyjs.com/build/css/themes/default.css">
    <!-- Vendor scripts -->
    <script src="scripts/leaflet.js" type="text/javascript"></script>
    <script src="scripts/groupedlayercontrol.js" type="text/javascript"></script>
    <script src="scripts/easy-button.js" type="text/javascript"></script>
    <script src="scripts/icons.js" type="text/javascript"></script>
    <script src="vendor/Leaflet.MousePosition/L.Control.MousePosition.js" type="text/javascript"></script>
    <script src="scripts/hash.js" type="text/javascript"></script>
    <script src="scripts/leaflet.contextmenu.js" type="text/javascript"></script>
    <script src="https://alertifyjs.com/build/alertify.js" type="text/javascript"></script>


    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#293f45">
    <meta name="msapplication-TileColor" content="#525252">
    <meta name="theme-color" content="#ffffff">
    <style>
        label{
            color: #ffffff;
        }
        a:hover{
            color: #ffffff;
        }
        form{padding: 20px;}
    </style>
</head>

<body class="noselect" class="clearfix">
<div class="modal__bg" id="bg_modal"></div>

<div class="info-modal modal" key="info">
    <div class="close-modal" key="info"></div>
    <h1 class="modal-header">Contribute to the project</h1>
    <a href="https://discordapp.com/invite/KeNAdbT" target="_blank">
        <div class="modal-content  clearfix">
            <div class="modal-content__img">
                <img src="data/images/site/discord-icon.png" alt="Discord Logo">
            </div>
            <div class="modal-content__text">
                Join the conversation. The <span class="modal-content__strong">CEMap Discord</span> has areas to hangout and chat, report locations to add to the map, and talk to the developers.
            </div>
        </div>
    </a>
    <a href="https://github.com/Naksta/mapconan" target="_blank">
        <div class="modal-content  clearfix">
            <div class="modal-content__img">
                <img src="data/images/site/github-icon.png" alt="Github Logo">
            </div>
            <div class="modal-content__text">
                Our project is public on <span class="modal-content__strong">Github</span>. Feel free to contribute to the project, make suggestions, or just watch the progession of the project.
            </div>
        </div>
    </a>
    <h1 class="modal-header">Support the project</h1>
    <div class="modal-content__paypal  clearfix">
        <div class="modal-content__text ">
            Donate to the project! Any amount is appreciated. This helps keep the map ad free. Thanks for using the map!
        </div>
        <div class="modal-content__paypal--button">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
						">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
        </div>
    </div>
    <h1 class="modal-header">CE Map - Android Mobile App</h1>
    <div class="modal-content__android  clearfix">
        <div class="modal-content__text ">
            The mobile app for this map tool is availiable on Android based devices.<br>
            <br>
            You can download the application on the Google Play Store by clicking the button below :
        </div>
        <div class="modal-content__android--button">
            <a href='https://play.google.com/store/apps/details?id=com.conanexilesmap.cemap'><img alt='Get it on Google Play' width="175px" src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
        </div>
    </div>
</div>

<!--**************************LOGIN**************************-->
<div class="info-modal modal" id="login_form" key="info_login">
    <div class="close-modal" key="info_login"></div>
    <h1 class="modal-header">Login</h1>
    <form id="loginform">

        <div id="validation" style="display: none;" class="alert alert-danger alert-dismissible fade show" role="alert">
            <span>Email or Password is incorrect.</span>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" class="form-control" id="login_email" aria-describedby="emailHelp" placeholder="Enter email" required>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" class="form-control" id="login_password" placeholder="Password" required>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="open-modal mobile-hide" key="info_forgot" style="cursor: pointer;">Forgot Password?</label>
                </div>
            </div>
            <div class="col-md-6">
                <button type="button" class="info-button" id="login_btn">Login</button>
            </div>
        </div>
        <input type="hidden" name="mode" value="login">

        <div class="form-group text-center">
            <label class="open-modal mobile-hide" key="info_register" style="cursor: pointer;">New here? Sign up</label>
        </div>
    </form>
</div>

<!--**************************REGISTER**************************-->
<div class="info-modal modal" id="register_form" key="info_register">
    <div class="close-modal" key="info_register"></div>
    <h1 class="modal-header">Register</h1>
    <form id="registerform">
        <div id="register_validation" style="display: none;" class="alert alert-danger alert-dismissible fade show" role="alert">
            <span>Account for this email already exist.</span>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" name="username" class="form-control" id="exampleInputtext1" aria-describedby="emailHelp" placeholder="Enter username" required>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
        </div>
        <input type="hidden" name="mode" value="register">
        <button type="button" class="info-button" id="register_btn">Register</button>
    </form>
</div>

<!--**************************Forgot Pasword**************************-->
<div class="info-modal modal" id="forgot_password_modal" key="info_forgot">
    <div class="close-modal" key="info_forgot"></div>
    <h1 class="modal-header">Forgot Password?</h1>

    <form id="forgot_password_form">
        <div id="forgot_validation" style="display: none;" class="alert alert-danger alert-dismissible fade show" role="alert">
            <span>Account for this email not exist.</span>
        </div>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
        </div>
        <input type="hidden" name="mode" value="forgot_password">
        <button type="button" id="forgot_password_btn" class="info-button">Submit</button>
    </form>

    <div id="forgot_password_msg" style="display: none; padding: 20px;">
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            Forgot password email successfully sent.
        </div>
        <button type="button" id="forgot_password_btn_ok" class="info-button">Ok</button>
    </div>
</div>


<!--**************************LOGOUT MODAL**************************-->
<div class="info-modal modal" id="logout_modal" key="info_logout">
    <div class="close-modal" key="info_logout"></div>
    <h1 class="modal-header">Logout Successfully.</h1>
    <button type="button" id="logout_btn" class="info-button">Ok</button>
</div>
</a>

<div id="map" class="wrapper  clearfix  map">
    <main>
        <script type="text/javascript" src="scripts/mapData.js">
            //If you're reading this, you're beautiful.
        </script>
    </main>
</div>

<div class="button-wrapper clearfix">
    <div class="info-button open-modal mobile-hide" key="info">
        Information
    </div>

    <?php
        if(isset($_SESSION['login_user'])){
            $block = 'block';
            $none = 'none';
            //$name = $_SESSION['login_user'];
            $name = 'Logout';
        }else{
            $block = 'none';
            $none = 'block';
            $name = '';
        }
    ?>

    <div class="info-button open-modal mobile-hide" id="login_modal_btn" key="info_login" style="display: <?php echo $none;?>;">
        Login/Register
    </div>

    <div id="logout_text" class="info-button open-modal mobile-hide" key="info_logout" style="display: <?php echo $block;?>;"><?php echo $name;?></div>
    </div>

<script src="scripts/pageEvents.js" type="text/javascript"></script>
<div class="mobile-show">
    <script type="text/javascript">
        L.easyButton('<img src="data/images/icons/icon_lore_CLOSE.png" width="20">', function(btn, map){
            if (confirm('Clear markers?')) {
                petMerchantGroup.remove(map);
                petHyenaGroup.remove(map);
                petOstrichGroup.remove(map);
                petSabretoothGroup.remove(map);
                petElephantGroup.remove(map);
                petTigerGroup.remove(map);
                petRhinoGroup.remove(map);
                petFawnGroup.remove(map);
                petCrocGroup.remove(map);
                petBoarGroup.remove(map);
                petWolfGroup.remove(map);
                ironGroup.remove(map);
                coalGroup.remove(map);
                brimstoneGroup.remove(map);
                crystalGroup.remove(map);
                silverGroup.remove(map);
                starmetalGroup.remove(map);
                blackiceGroup.remove(map);
                obsidianGroup.remove(map);
                ReligionGroup.remove(map);
                alchemistGroup.remove(map);
                armorerGroup.remove(map);
                sherpaGroup.remove(map);
                blacksmithGroup.remove(map);
                carpenterGroup.remove(map);
                cookGroup.remove(map);
                entertainerGroup.remove(map);
                priestGroup.remove(map);
                tannerGroup.remove(map);
                taskmasterGroup.remove(map);
                smelterGroup.remove(map);
                namedArcherGroup.remove(map);
                namedAlchemistGroup.remove(map);
                namedArmorerGroup.remove(map);
                namedSherpaGroup.remove(map);
                namedBlacksmithGroup.remove(map);
                namedCarpenterGroup.remove(map);
                namedCookGroup.remove(map);
                namedEntertainerGroup.remove(map);
                namedFighterGroup.remove(map);
                namedPriestGroup.remove(map);
                namedSmelterGroup.remove(map);
                namedTannerGroup.remove(map);
                namedTaskmasterGroup.remove(map);
                caveGroup.remove(map);
                obeliskGroup.remove(map);
                dungeonGroup.remove(map);
                campGroup.remove(map);
                capitalGroup.remove(map);
                vistaGroup.remove(map);
                ruinsGroup.remove(map);
                bossGroup.remove(map);
                loreGroup.remove(map);
                treasureGroup.remove(map);
                recipeGroup.remove(map);
                emoteGroup.remove(map);
                randomThrallGroup.remove(map);
                petBearGroup.remove(map);
            } else {
                // Do nothing!
            }
        }).addTo(map);

        alertify.set('notifier','position','bottom-left');
        var duration = 7;
        var msg = alertify.success('<p style = "font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;font-size:16px;font-style:strong;">You can submit marker<br> changes with right click.<br>( '+ duration +' )</p>', 7, function(){ clearInterval(interval);});
        var interval = setInterval(function(){
            msg.setContent('<p style = "font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;font-size:16px;font-style:strong;">You can submit marker<br> changes with right click.<br>( '+(--duration)+' )</p>');
        },1000);
        window.onload = msg;
    </script>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        $("#login_btn").click(function(){
            $.ajax({
                type: "post",
                url: 'insert.php',
                data: $("#loginform").serialize(),
                success: function(response)
                {
                    if(response == 1){
                        $("#login_form").removeClass("is-active");
                        $("#bg_modal").removeClass("is-active");
                        $("#validation").hide();
                        var session_text =  '<?php if(isset($_SESSION['login_user'])){ echo $_SESSION['login_user']; }?>';
                        $('#loginform').trigger("reset");
                        $("#logout_text").html('Logout');
                        $("#login_modal_btn").hide();
                        $("#logout_text").show();
                    }else if(response == -1){
                        $('#validation span').text('Please fill all fields.');
                        $("#validation").show();
                    }else{
                        $('#validation span').text('Email or Password is incorrect.');
                        $("#validation").show();
                    }
                }
            });
        });

        $("#register_btn").click(function(){
            $.ajax({
                type: "post",
                url: 'insert.php',
                data: $("#registerform").serialize(),
                success: function(response)
                {
                    if(response == 1){
                        $("#register_form").removeClass("is-active");
                        $("#bg_modal").removeClass("is-active");
                        $("#register_validation").hide();
                        var session_text =  '<?php if(isset($_SESSION['login_user'])){ echo $_SESSION['login_user']; }?>';
                        $('#registerform').trigger("reset");
                        $("#logout_text").html('Logout');
                        $("#login_modal_btn").hide();
                        $("#logout_text").show();
                    }else if(response == -1){
                        $('#register_validation span').text('Please fill all fields.');
                        $("#register_validation").show();
                    }else{
                        $('#register_validation span').text('Account for this email already exist.');
                        $("#register_validation").show();
                    }
                }
            });
        });

        $("#forgot_password_btn").click(function(){
            $.ajax({
                type: "post",
                url: 'insert.php',
                data: $("#forgot_password_form").serialize(),
                success: function(response)
                {
                    if(response == 1){
                        $("#forgot_password_form").hide();
                        $("#forgot_validation").hide();
                        $("#forgot_password_msg").show();
                    }else if(response == -1){
                        $('#forgot_validation span').text('Please enter email address.');
                        $("#forgot_validation").show();
                    }else{
                        $('#forgot_validation span').text('Account for this email not exist.');
                        $("#forgot_validation").show();
                    }
                }
            });
        });

        $("#logout_text").click(function(){
            $.ajax({
                type: "post",
                url: 'logout.php',
                success: function(response)
                {
                    if(response == 1){
                        $("#logout_text").hide();
                        $("#login_modal_btn").show();
                    }
                }
            });
        });

        $("#forgot_password_btn_ok").click(function(){
            $("#forgot_validation").hide();
            $('#forgot_password_form').trigger("reset");
            $("#forgot_password_form").show();
            $("#forgot_password_msg").hide();
            $("#forgot_password_modal").removeClass("is-active");
            $("#bg_modal").removeClass("is-active");
        });

        $("#logout_btn").click(function(){
            $("#logout_modal").removeClass("is-active");
            $("#bg_modal").removeClass("is-active");
        });
    });
</script>
</body>
</html>


