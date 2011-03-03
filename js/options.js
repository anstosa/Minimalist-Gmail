$(function(){
	//---- LOAD ----//
		// defaults
		if (!localStorage["options"]) localStorage["options"] = "{}";
		if (!localStorage["BTNcolor"]) localStorage["BTNcolor"] = "#000000";
		if (!localStorage["BTNborder"]) localStorage["BTNborder"] = "#bbbbbb";
		if (!localStorage["BTNbottom"]) localStorage["BTNbottom"] = "#f9f9f9";
		if (!localStorage["BTNtop"]) localStorage["BTNtop"] = "#e3e3e3";
		if (!localStorage["customCSSval"]) localStorage["customCSSval"] = " ";
		if (!localStorage["appsURL"]) localStorage["appsURL"] = "https://mail.google.com/a/example.com";
		if (!localStorage["starCLR"]) localStorage["starCLR"] = "#ffcc00";
		if (!localStorage["uCLR"]) localStorage["uCLR"] = "#00ccff";
		if (!localStorage["highCLR"]) localStorage["highCLR"] = "#0099ff";
		//if (!localStorage["highCLRu"]) localStorage["highCLRu"] = "#00ccff";
		if (!localStorage["EIC_1"]) localStorage["EIC_1"] = "";
		if (!localStorage["EIC_2"]) localStorage["EIC_2"] = "";
		if (!localStorage["EIC_3"]) localStorage["EIC_3"] = "";
		if (!localStorage["SNC_on"]) localStorage["SNC_on"] = "false";

	function load(onlyOptions) {
		if (localStorage['options']) {
			try {
				var o = JSON.parse(localStorage['options']);
			} catch(e) {
				console.error("Corrupted options found in local storage. Resetting to defaults.");
				localStorage['options'] = "{}";
				o = JSON.parse(localStorage['options']);
			}
			// GENERAL
				$("#mgicon").attr('checked', o.mgicon);
				$("#mailto").attr('checked', o.mailto);
				$("#BTN").attr('checked', o.BTN);
				if ((o.BTNcolor != null) && (o.BTNcolor != ""))
					$("#BTNcolorSUB").attr("style","background-color:" + o.BTNcolor + ";");
				if ((o.BTNborder != null) && (o.BTNborder != ""))
					$("#BTNborderSUB").attr("style","background-color:" + o.BTNborder + ";");
				if ((o.BTNbottom != null) && (o.BTNbottom != ""))
					$("#BTNbottomSUB").attr("style","background-color:" + o.BTNbottom + ";");
				if ((o.BTNtop != null) && (o.BTNtop != ""))
					$("#BTNtopSUB").attr("style","background-color:" + o.BTNtop + ";");
				$("#testButton").attr("style","color: " + o.BTNcolor + ";border: 1px solid " + o.BTNborder + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + o.BTNbottom + "),to(" + o.BTNtop + "));");
				$("#loader").attr('checked', o.loader);
				$("#corners").attr('checked', o.corners);
				$("#scroll").attr('checked', o.scroll);
				$("#trans").attr('checked', o.trans);
				$("#customCSS").attr('checked', o.customCSS);
				if ((o.customCSSval != null) && (o.customCSSval != ""))
					$("#customCSSval").val(localStorage["customCSSval"]);
			// NOTIFICATIONS
				$("#favicon").attr('checked', o.favicon);
				$("#desktop").attr('checked', o.desktop);
				$("#apps").attr('checked', o.apps);
				if ((o.appsURL != null) && (o.appsURL != ""))
					$("#appsURL").val(o.appsURL);
				else $("#appsURL").val("https://mail.google.com/a/yourdomain.com");
			// GOOGLE BAR
				$("#gbarH").attr('checked', o.gbarH);
				$("#gbarO").attr('checked', o.gbarO);
				$("#gbarB").attr('checked', o.gbarB);
				$("#gbar").attr('checked', o.gbar);
				$("#cbar").attr('checked', o.cbar);
					if ((o.c_n_1 != null) && (o.c_n_1 != ""))
						$("#c_n_1").val(o.c_n_1);
					else $("#c_n_1").val("Gmail");
					if ((o.c_u_1 != null) && (o.c_u_1 != ""))
						$("#c_u_1").val(o.c_u_1);
					else $("#c_u_1").val("https://mail.google.com");
					if ((o.c_t_1 != null) && (o.c_t_1 != ""))
						$("#c_t_1").val(o.c_t_1);
					else $("#c_t_1").val("_blank");
					if ((o.c_n_2 != null) && (o.c_n_2 != ""))
						$("#c_n_2").val(o.c_n_2);
					else $("#c_n_2").val("Calendar");
					if ((o.c_u_2 != null) && (o.c_u_2 != ""))
						$("#c_u_2").val(o.c_u_2);
					else $("#c_u_2").val("http://www.google.com/calendar");
					if ((o.c_t_2 != null) && (o.c_t_2 != ""))
						$("#c_t_2").val(o.c_t_2);
					else $("#c_t_2").val("_blank")
					if ((o.c_n_3 != null) && (o.c_n_3 != ""))
						$("#c_n_3").val(o.c_n_3);
					else $("#c_n_3").val("Documents");
					if ((o.c_u_3 != null) && (o.c_u_3 != ""))
						$("#c_u_3").val(o.c_u_3);
					else $("#c_u_3").val("http://docs.google.com");
					if ((o.c_t_3 != null) && (o.c_t_3 != ""))
						$("#c_t_3").val(o.c_t_3);
					else $("#c_t_3").val("_blank")
					if ((o.c_n_4 != null) && (o.c_n_4 != ""))
						$("#c_n_4").val(o.c_n_4);
					else $("#c_n_4").val("Reader");
					if ((o.c_u_4 != null) && (o.c_u_4 != ""))
						$("#c_u_4").val(o.c_u_4);
					else $("#c_u_4").val("http://www.google.com/reader");
					if ((o.c_t_5 != null) && (o.c_t_5 != ""))
						$("#c_t_5").val(o.c_t_5);
					else $("#c_t_5").val("_blank")
					if ((o.c_n_5 != null) && (o.c_n_5 != ""))
						$("#c_n_5").val(o.c_n_5);
					else $("#c_n_5").val("Photos");
					if ((o.c_u_5 != null) && (o.c_u_5 != ""))
						$("#c_u_5").val(o.c_u_5);
					else $("#c_u_5").val("http://picasaweb.google.com");
					if ((o.c_n_6 != null) && (o.c_n_6 != ""))
						$("#c_n_6").val(o.c_n_6);
					else $("#c_n_6").val("Web");
					if ((o.c_u_6 != null) && (o.c_u_6 != ""))
						$("#c_u_6").val(o.c_u_6);
					else $("#c_u_6").val("http://www.google.com");
					if ((o.c_t_6 != null) && (o.c_t_6 != ""))
						$("#c_t_6").val(o.c_t_6);
					else $("#c_t_6").val("_blank")
					$("#cbarM").attr('checked', o.cbarM);
				$("#user").attr('checked', o.user);
				$("#labs").attr('checked', o.labs);
				$("#settings").attr('checked', o.settings);
				$("#help").attr('checked', o.help);
				$("#out").attr('checked', o.out);
			// HEADER
				$("#header").attr('checked', o.header);
				$("#logoH").attr('checked', o.logoH);
				$("#logo").attr('checked', o.logo);
				if ((o.logoSRC != null) && (o.logoSRC != ""))
					$("#logoSRC").val(o.logoSRC);
				else $("#logoSRC").val("http://www.example.com/image.jpg");
				$("#s_all").attr('checked', o.s_all);
				$("#s_mail").attr('checked', o.s_mail);
				$("#s_web").attr('checked', o.s_web);
				$("#s_links").attr('checked', o.s_links);
			// MAIN
				$("#borders").attr('checked', o.borders);
				$("#grabbers").attr('checked', o.grabbers);
				$("#simplify").attr('checked', o.simplify);
				$("#starHigh").attr('checked', o.starHigh);
				if ((o.starCLR != null) && (o.starCLR != ""))
					$("#starCLRsub").attr("style","background-color:" + o.starCLR + ";");
				$("#uHigh").attr('checked', o.uHigh);
				if ((o.uCLR != null) && (o.uCLR != ""))
					$("#uCLRsub").attr("style","background-color:" + o.uCLR + ";");
				$("#high").attr('checked', o.high);
				if ((o.highCLR != null) && (o.highCLR != ""))
					$("#highCLRsub").attr("style","background-color:" + o.highCLR + ";");
				$("#zero").attr('checked', o.zero);
				$("#stars").attr('checked', o.stars);
				$("#attach").attr('checked', o.attach);
				$("#attachNew").attr('checked', o.attachNew);
				$("#attachC").attr('checked', o.attachC);
				if ((o.ci_1 != null))
					$("#ci_1").val(o.ci_1);
				else $("#ci_1").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9twmOXt5vV08ZivFXX1cc4n2BKnW3QzsE1k2AdlkxTsFceoEVjvV5rvVhCrkyMzWx5wVxauFbU7dLc2suo1nxemneSsJcmiFLS0MM3qErN5dU5p2BXs2jl4tKByGcqp0UAiDyv1YHg3s9Oq1KHyGzRz8JknnoAfT85l1ZMsk+cup8ZjUjk6+XMyr0BljrX1cljplhHs1Msp1Flrnr8/PsNgUcOkUVKnlYxhFXq9ukQnj2FxV/z8+9qp4Fzu4ZQkmYmAAAAAXRSTlMAQObYZgAAALxJREFUeF5lzEVuBFEQA9D6CM2Mw8wTZrj/reJWlFXeoiRbKtN/H2mUHeJZ8H69zuc7ojSNZHbo/oodRUOOuxnyb3ELL7Dfn5pXoMWiLNfj5bIoNBeby4VKmI4noI+Fai2FYZjd3X+DZ76AfN9fdcEDnMy2qipKkmQdjiYY0by11tIUshFy4erNUATgPWvt3FPjgFbQeZzzutnWQExKGTslWutqfAgixphvbpQQ5iiEInrL87zvP6E/4zz+ANk3GWWQfcMTAAAAAElFTkSuQmCC");
				if ((o.ci_2 != null))
					$("#ci_2").val(o.ci_2);
				else $("#ci_2").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////JGBLBBwfFDwvPJRzVNCbNIhrDCgfKGhPIFRDXOCndSDTPKB7TMCP22NfHEg3bRDLMHRXjVD3BBAPaQC7hTzrfSzfSLSH88vHOJBq/AQHRKh7YOyvNKSP75+XNIBeaWx34AAAAAXRSTlMAQObYZgAAAHVJREFUeF5NywcKA0EIBVB1ai/bW5L73zIJLOt8EPTxhTvDEO6N4YKtg3mufu0byzKps3UQwqSiFSNDBRXRHA9UDzkiMcgEkBHxD+/fbFICx6sEpTGk9ZQfW/h71806QQ+80BVhRgaShsbDUWbRu9YEXYiI7y+jRgSXm47dBAAAAABJRU5ErkJggg==");
				if ((o.ci_3 != null))
					$("#ci_3").val(o.ci_3);
				else $("#ci_3").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9Jvv9qyP8Rq/4BjNAxtv8hsP+R1f97zf8stP8Fld4HmeMJneoEkNcWrf8Ne7QnW3wEktoKoO4ImuZaw/8/uv8esP8Glt8NpvgcmdhRmsUAicwCjtOJ0v8MpfYohrl0y/8LofCC0P8MpPRSwf8Bis4OqPsem9oRh8Qlsv9cos0Qgr06dJh5x/UweaNCu/+c2P8cmNYfnt45uf8ar/82t/8mTmcnVXK/5f8dZI0zoNkWe7K14f9Xwv9evvUXmtyLnD/iAAAAAXRSTlMAQObYZgAAAKlJREFUeF41ylOWBEEARNFE2bbRtsf731WnJv5enAsAUDUUQTi8gJhaa+jnKCun/6feF79TrN/U0zcX2u65g9e10w3iQYW3ieUEd0g80QRjee0sEBIPPF5pN8Fqu3U/ibjLukK6t0zDnl0ilMTBtMPUr8qSCIwX2ch7ZkfWjH1gmayZCL4ebWgarJkIP7yD4du0uUjtNrcribQQf5fLcpmf+agAkiRRLMAbyPoVvHcsEKMAAAAASUVORK5CYII%3D");
				if ((o.ci_4 != null))
					$("#ci_4").val(o.ci_4);
				else $("#ci_4").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFOEtOrlhX2gAARa5RZpdqh9GR7u3tx7FPKKYw/+kwuI2K3st1R2mErrGpbqdy/u1z8cwT89M8d5d829za+QEAIaUq/+pP/tsm8fHx/dYNGFV7raN21lZTq6KEeLb09NddTmN6NLQ7/9kNsayabNdzi6aNyjIx/9sbFpYeJpwu08rK6wAA78whzdHNzs/O9tAQ/f39/9sQzbq60CUl/+IRNZdF7x4gioBu5clKjsHzm7uWdJpbkLyht0Qswk1N20RFNZQ9nJF55+fn3woKwMfA6cUaIDRI694zRcVMX9Jl4xAP4hERK386y71ye6CDLrE2IYDCTYO8fpuBdWthYVVZlGJRvWlsa5R31cFRjkQ98ywri2koRZ3sv8LDgL75yFJSO3CBGXayAIUJDIsUpp10ibmNOJjgqp5n40hNvYZ0Nm9KzSoqpbVVnBwqvTMz4sAlu7A7J580L1t0h417Ob1CL5XqMJPnN5juR2+lOZ3v1tbV3NfX9RoZadZvdNl9////1FKScAAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAA/ElEQVR42mKoBwE2LSMjLQkwkwGIJbjis42N1ey4JCACekL2zkxe3kxMznnVIAFhVpuMGhlGRpkobW01tnoGAz4VVi5GhcAKhTAzEZHMegaXkhIVK4U0ubhKntDIXFthBlVFRc/UojI5y5gEX/eCaGUGvkJ/D1aGxNLyAAZuEyUdaQYWTVF/FSEGKSk3czFJfVdpBlVNDQ7FOr+QYFl+JUmBfGUGPYdkDVHTYm5+MSDflb2KoT6oMMnHUZ5T3FBJ31VQ1oCh3omlMEueU91QUl9HMN0J5HRhIWZrHRN1cUGLFGGI59h4w1lyItiledmgvgUK6cXqCUO8DxBgAGnMP5299Ij8AAAAAElFTkSuQmCC");
				if ((o.ci_5 != null))
					$("#ci_5").val(o.ci_5);
				else $("#ci_5").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////gTTnaQS+/AADrcVfqZkzXdmjOJBray7zYVkTVk4TjWkS/DQqnHRXvfGHWNynbppbXtqjLHBXp1Mfr5tjPMya0SDzXSDnTLSHh3s/pkHvFKSPyd1a6eG9nal6GiHWkF23gAAAAAXRSTlMAQObYZgAAAIhJREFUeF6NykcKQkEQhOEOk/PLwXT/W9oOgogbv139FPznIe7iE6B7h3IVqpwlxoibBFn6nFpwk9ntCKC01m3yiDSsEkZQSpX51DpGjxvVCjnndVhzlwQgopoN1eX1T4mBiPzc6r4E5y6JGaoIh7F2bE02wy5sOAZj3I17oM77bbGCAfgL/HgCqrEIzdJPFbQAAAAASUVORK5CYII=");
				if ((o.ci_6 != null))
					$("#ci_6").val(o.ci_6);
				else $("#ci_6").val("https://mail.google.com/mail/u/0/images/pdf.gif");
				if ((o.ci_7 != null))
					$("#ci_7").val(o.ci_7);
				else $("#ci_7").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///8AiDwcokLy8eUBmTlCvP9Jvv96zf9zy/9syf+32ufz8+pDr0wAkjppvO2E0f9exP+L0v46rEpVwv9at+2f2f9Ov/+ExO3w7eInpkQyqkjH5vWAz/84uP8qqpF6we254faS1f+b2P88uf9RwP80t//u7N9kxv9Vv/vr6dve5uG43/ERnz5oxfh3yfYNl2CX1//i389Zw//e28wSoV7o5ddYvsQDiEm82N8cmkNOtnfl4tIJnDwVoWtKt5Y9tc6aIrEXAAAAAXRSTlMAQObYZgAAAKdJREFUeF5NzdWuAzEMBFAnWWZmLDNzL/z/XzWudtX6zUczGoBd69qFrKhTx48kESD8wGEkiUMIB23TLItvyHWWLDRN7SHUdTaZn5+3TQc5YwnC/rh+w8CN47q2LCsIZgi46tqy0s+WgH+/GonDEvDvAtgYw4Pf3wUDvIFgeFmWUlo5/n+1JeSKkKZ09XP6NU2TEPIGykEQ8EcwDA+N350fAcAGBrrGC6HBFvKj4FQ8AAAAAElFTkSuQmCC");
				if ((o.ci_8 != null))
					$("#ci_8").val(o.ci_8);
				else $("#ci_8").val("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////aWwf+gwD8ZQHEVQP/mxz0YwL/zY3eXAb/r0f/oiv+27H/05rsYQP/fAD/dQD/qDn/wXH/tVX/u2P/cAD0cALubgT+iQDoXwSxSgb/x3/pbQTbWwf/awDQaQLjXQXM1JhSAAAAAXRSTlMAQObYZgAAAIlJREFUeF5lykUCQjEMhOFJvU/dhfvfkqTQDWT3/Rn8X1lW/ujHIXaF/bWVUlV+XR/VNO2kzWsDvHg/JZjdbAHHsSr1iG9nag59r5Ric9Cufl0YR2Yyhy0QhiE7DQgxtsyPeUDoukmYzANCUdzCbIK1WjOzCbCOxQzJFwDXzvO8LGc6CZD/d0DlG4N+DR+Rmb4UAAAAAElFTkSuQmCC");
				if ((o.ci_9 != null))
					$("#ci_9").val(o.ci_9);
				else $("#ci_9").val("data:image/gif;base64,R0lGODlhEAAQAMQfAMS35mtMwlItt5N70lw5vEUdsVUwuGNCvnJTxFsnpFg0ukwmtVUgoa2b3aCL2IZszWdGwGA+vU8otntfyXdax0sktEgfsm9QxKiV27Gg3lk1ukghs2k4qUQbsbOi3////yH5BAEAAB8ALAAAAAAQABAAAAWk4AdkwwCcDkSdAPI5ntcMDxYPR9DE1wR7mMfE5hkQIDtPIsFpLplOBvRCmUwolEsAciAoDJJKIXBBmLXciFcg2XQggXg8TdAYBAtL5wDpcw9qdmwbBQURh4CHdXdhehsaBJGRGl9sFXoWEgYKnF93lnoFC58CpWwSCxuhCwIaC6+oCxUbhB0WrAoaFrS0FoUdBRuauQofvG4dybTDxR/Oz9DRHyEAOw==");
				$("#pi").attr('checked', o.pi);
				$("#bottom").attr('checked', o.bottom);
				$("#t_fix").attr('checked', o.t_fix);
				$("#t_check").attr('checked', o.t_check);
				$("#t_check_l").attr('checked', o.t_check_l);
				$("#t_arch").attr('checked', o.t_arch);
				$("#t_move").attr('checked', o.t_move);
				$("#t_actions").attr('checked', o.t_actions);
				$("#t_refresh").attr('checked', o.t_refresh);
				$("#t_top").attr('checked', o.t_top);
				//$("#details").attr('checked', o.details);
				$("#reply").attr('checked', o.reply);
				$("#zads").attr('checked', o.zads);
				$("#ads").attr('checked', o.ads);
				$("#bads").attr('checked', o.bads);
			// NAVIGATION
				$("#nav").attr('checked', o.nav);
				$("#navF").attr('checked', o.navF);
				$("#navO").attr('checked', o.navO);
				$("#navWC").attr('checked', o.navWC);
				if ((o.navW != null) && (o.navW != ""))
					$("#navW").val(o.navW);
				else $("#navW").val("172");
				$("#hr").attr('checked', o.hr);
				$("#top").attr('checked', o.top);
				$("#mail").attr('checked', o.mail);
				$("#contacts").attr('checked', o.contacts);
				$("#tasks").attr('checked', o.tasks);
				$("#middle").attr('checked', o.middle);
				$("#compose").attr('checked', o.compose);
				//$("#inboxH").attr('checked', o.inboxH);
				$("#spam").attr('checked', o.spam);
				$("#drafts").attr('checked', o.drafts);
				//$("#spamH").attr('checked', o.spamH);
				$("#buzz").attr('checked', o.buzz);
				$("#icons").attr('checked', o.icons);
				$("#moreC").attr('checked', o.moreC);
				$("#more").attr('checked', o.more);
				$("#invites").attr('checked', o.invites);
			// CHAT
				$("#chat").attr('checked', o.chat);
				$("#c_search").attr('checked', o.c_search);
				$("#c_set").attr('checked', o.c_set);
				$("#c_aim").attr('checked', o.c_aim);
				$("#c_invisible").attr('checked', o.c_invisible);
				$("#status").attr('checked', o.status);
				$("#offline").attr('checked', o.offline);
				$("#sms").attr('checked', o.sms);
				$("#idle").attr('checked', o.idle);
			// FOOTER
				$("#f_tips").attr('checked', o.f_tips);
				$("#f_options").attr('checked', o.f_options);
				$("#f_legal").attr('checked', o.f_legal);
				$("#f_s_classic").attr('checked', o.f_s_classic);
				$("#f_s_label").attr('checked', o.f_s_label);
				$("#f_s_graphic").attr('checked', o.f_s_graphic);
				$("#f_s_verbose").attr('checked', o.f_s_verbose);
				$("#f_s_menu").attr('checked', o.f_s_menu);
				$("#f_activity_show").attr('checked', o.f_activity_show);
				$("#f_activity_hide").attr('checked', o.f_activity_hide);
				$("#f_activity_move").attr('checked', o.f_activity_move);
				$("#f_activity_center").attr('checked', o.f_activity_center);
		}
		if (onlyOptions !== true) {
			$("#EIC_1").val(localStorage["EIC_1"]);
			$("#EIC_2").val(localStorage["EIC_2"]);
			$("#EIC_3").val(localStorage["EIC_3"]);
			$("#SNC_on").attr('checked', (localStorage["SNC_on"] == "true"));
			localStorage["uncheckedUpdate"] = false;
		}
	}
	load();
	//---- END LOAD ----//
	
	//---- SAVE ----//
	function save(){
		localStorage['options'] = JSON.stringify({
			// GENERAL
				"mgicon":$("#mgicon").attr('checked'),
				"mailto":$("#mailto").attr('checked'),
				"BTN":$("#BTN").attr('checked'),
					"BTNcolor":localStorage["BTNcolor"],
					"BTNborder":localStorage["BTNborder"],
					"BTNbottom":localStorage["BTNbottom"],
					"BTNtop":localStorage["BTNtop"],
				"loader":$("#loader").attr('checked'),
				"corners":$("#corners").attr('checked'),
				"scroll":$("#scroll").attr('checked'),
				"trans":$("#trans").attr('checked'),
				"customCSS":$("#customCSS").attr('checked'),
					"customCSSval":$("#customCSSval").val().replace(/(\r\n|\n|\r)/gm,""),
			// NOTIFICATIONS
				"favicon":$("#favicon").attr('checked'),
				"desktop":$("#desktop").attr('checked'),
				"apps":$("#apps").attr('checked'),
					"appsURL":$("#appsURL").val(),
			// GOOGLE BAR
				"gbarH":$("#gbarH").attr('checked'),
				"gbarO":$("#gbarO").attr('checked'),
				"gbarB":$("#gbarB").attr('checked'),
				"gbar":$("#gbar").attr('checked'),
				"cbar":$("#cbar").attr('checked'),
					"c_n_1":$("#c_n_1").val(),
					"c_u_1":$("#c_u_1").val(),
					"c_t_1":$("#c_t_1").val(),
					"c_n_2":$("#c_n_2").val(),
					"c_u_2":$("#c_u_2").val(),
					"c_t_2":$("#c_t_2").val(),
					"c_n_3":$("#c_n_3").val(),
					"c_u_3":$("#c_u_3").val(),
					"c_t_3":$("#c_t_3").val(),
					"c_n_4":$("#c_n_4").val(),
					"c_u_4":$("#c_u_4").val(),
					"c_t_4":$("#c_t_4").val(),
					"c_n_5":$("#c_n_5").val(),
					"c_u_5":$("#c_u_5").val(),
					"c_t_5":$("#c_t_5").val(),
					"c_n_6":$("#c_n_6").val(),
					"c_u_6":$("#c_u_6").val(),
					"c_t_6":$("#c_t_6").val(),
					"cbarM":$("#cbarM").attr('checked'),
				"user":$("#user").attr('checked'),
				"labs":$("#labs").attr('checked'),
				"settings":$("#settings").attr('checked'),
				"help":$("#help").attr('checked'),
				"out":$("#out").attr('checked'),
			// HEADER
				"header":$("#header").attr('checked'),
				"logoH":$("#logoH").attr('checked'),
				"logo":$("#logo").attr('checked'),
					"logoSRC":$("#logoSRC").val(),
				"s_all":$("#s_all").attr('checked'),
				"s_mail":$("#s_mail").attr('checked'),
				"s_web":$("#s_web").attr('checked'),
				"s_links":$("#s_links").attr('checked'),
			// MAIN
				"borders":$("#borders").attr('checked'),
				"grabbers":$("#grabbers").attr('checked'),
				"simplify":$("#simplify").attr('checked'),
				"starHigh":$("#starHigh").attr('checked'),
					"starCLR":localStorage["starCLR"],
				"uHigh":$("#uHigh").attr('checked'),
					"uCLR":localStorage["uCLR"],
				"high":$("#high").attr('checked'),
					"highCLR":localStorage["highCLR"],
					//"highCLRu":localStorage["highCLRu"],
				"zero":$("#zero").attr('checked'),
				"stars":$("#stars").attr('checked'),
				"attach":$("#attach").attr('checked'),
				"attachNew":$("#attachNew").attr('checked'),
				"attachC":$("#attachC").attr('checked'),
					"ci_1":$("#ci_1").val(),
					"ci_2":$("#ci_2").val(),
					"ci_3":$("#ci_3").val(),
					"ci_4":$("#ci_4").val(),
					"ci_5":$("#ci_5").val(),
					"ci_6":$("#ci_6").val(),
					"ci_7":$("#ci_7").val(),
					"ci_8":$("#ci_8").val(),
					"ci_9":$("#ci_9").val(),
				"pi":$("#pi").attr('checked'),
				"t_fix":$("#t_fix").attr('checked'),
				"t_top":$("#t_top").attr('checked'),
				"bottom":$("#bottom").attr('checked'),
				"t_check":$("#t_check").attr('checked'),
				"t_check_l":$("#t_check_l").attr('checked'),
				"t_arch":$("#t_arch").attr('checked'),
				"t_move":$("#t_move").attr('checked'),
				"t_actions":$("#t_actions").attr('checked'),
				"t_refresh":$("#t_refresh").attr('checked'),
				//"details":$("#details").attr('checked'),
				"reply":$("#reply").attr('checked'),
				"zads":$("#zads").attr('checked'),
				"ads":$("#ads").attr('checked'),
				"bads":$("#bads").attr('checked'),
			// NAVIGATION
				"nav":$("#nav").attr('checked'),
				"navF":$("#navF").attr('checked'),
				"navO":$("#navO").attr('checked'),
				"navWC":$("#navWC").attr('checked'),
				"navW":$("#navW").val(),
				"hr":$("#hr").attr('checked'),
				"top":$("#top").attr('checked'),
				"mail":$("#mail").attr('checked'),
				"contacts":$("#contacts").attr('checked'),
				"tasks":$("#tasks").attr('checked'),
				"middle":$("#middle").attr('checked'),
				"compose":$("#compose").attr('checked'),
				"inboxH": false,//$("#inboxH").attr('checked'),
				"spam":$("#spam").attr('checked'),
				"drafts":$("#drafts").attr('checked'),
				//"spamH":$("#spamH").attr('checked'),
				"buzz":$("#buzz").attr('checked'),
				"icons":$("#icons").attr('checked'),
				"moreC":$("#moreC").attr('checked'),
				"more":$("#more").attr('checked'),
				"invites":$("#invites").attr('checked'),
			// CHAT
				"chat":$("#chat").attr('checked'),
				"c_search":$("#c_search").attr('checked'),
				"c_set":$("#c_set").attr('checked'),
				"c_aim":$("#c_aim").attr('checked'),
				"c_invisible":$("#c_invisible").attr('checked'),
				"status":$("#status").attr('checked'),
				"offline":$("#offline").attr('checked'),
				"sms":$("#sms").attr('checked'),
				"idle":$("#idle").attr('checked'),
			// FOOTER
				"f_tips":$("#f_tips").attr('checked'),
				"f_options":$("#f_options").attr('checked'),
				"f_legal":$("#f_legal").attr('checked'),
				"f_s_classic":$("#f_s_classic").attr('checked'),
				"f_s_label":$("#f_s_label").attr('checked'),
				"f_s_graphic":$("#f_s_graphic").attr('checked'),
				"f_s_verbose":$("#f_s_verbose").attr('checked'),
				"f_s_menu":$("#f_s_menu").attr('checked'),
				"f_activity_show":$("#f_activity_show").attr('checked'),
				"f_activity_hide":$("#f_activity_hide").attr('checked'),
				"f_activity_move":$("#f_activity_move").attr('checked'),
				"f_activity_center":$("#f_activity_center").attr('checked')
		});
		localStorage["appsURL"] = $("#appsURL").val();
		localStorage["customCSSval"] = $("#customCSSval").val();
		localStorage["EIC_1"] = $("#EIC_1").val();
		localStorage["EIC_2"] = $("#EIC_2").val();
		localStorage["EIC_3"] = $("#EIC_3").val();
		localStorage["SNC_on"] = $("#SNC_on").attr('checked');
		if (localStorage["SNC_on"] == "true") {
			var backgroundWindow = chrome.extension.getBackgroundPage();
			backgroundWindow.syncSave();
		}
		
		$("#announce").attr("style", "");
		$("#refreshEI").attr("style", "");
		$("#refresh").attr("style", "display: block !important;");
	}
	//---- END SAVE ----//
	
	//---- SYNC ----//
	$("#sncDirDlg").dialog({ 
		modal: true, 
		autoOpen: false, 
		title: "Initial Sync",
		closeText: "cancel",
		open: function(event, ui) { $(this).removeAttr("isOk"); },
		close: function(event, ui) {
			if (!$(this).attr("isOk")) {
				$("#SNC_on").removeAttr("checked");
			}
		},
		buttons: { 
			"Ok": function() {
				var backgroundWindow = chrome.extension.getBackgroundPage();
				if ($("#SNC_usebookmark").attr("checked")) {
					console.log("Sync: enabling, loading from bookmark.");
					backgroundWindow.syncLoad(true, false);
					backgroundWindow.attachSyncListeners();
					load(true);
				} else if ($("#SNC_uselocal").attr("checked")) {
					console.log("Sync: enabling, saving local settings.");
					save();
					backgroundWindow.attachSyncListeners();
				}
				$(this).attr("isOk", true);
				$(this).dialog("close");
			}
		}
	});
	function handleSyncChange() {
		var wasSyncing = (localStorage["SNC_on"] == 'true');
		var isSyncingNow = $("#SNC_on").attr('checked');
		var backgroundWindow = chrome.extension.getBackgroundPage();
		if (!wasSyncing && isSyncingNow) {
			// Sync was just enabled. If we have a sync bookmark created, ask
			// which way to sync. Otherwise, just start syncing by creating
			// the bookmark.
			backgroundWindow.hasSyncData(function(hasData) {
				if (hasData) {
					$("#sncDirDlg").dialog("open");
				} else {
					save();
					backgroundWindow.attachSyncListeners();
				}
			});
		} else if (wasSyncing && !isSyncingNow) {
			// Sync was just disabled.
			save();
			backgroundWindow.detachSyncListeners();
		}
	}
	//---- END SYNC ----//
	
	//---- SAVE LISTENERS ----//
	document.getElementById("OPTgen").addEventListener("keyup", save, false);
	document.getElementById("OPTgen").addEventListener("click", save, false);
	document.getElementById("OPTnot").addEventListener("keyup", save, false);
	document.getElementById("OPTnot").addEventListener("click", save, false);
	document.getElementById("OPTgoo").addEventListener("keyup", save, false);
	document.getElementById("OPTgoo").addEventListener("click", save, false);
	document.getElementById("OPThea").addEventListener("keyup", save, false);
	document.getElementById("OPThea").addEventListener("click", save, false);
	document.getElementById("OPTmai").addEventListener("keyup", save, false);
	document.getElementById("OPTmai").addEventListener("click", save, false);
	document.getElementById("OPTgat").addEventListener("keyup", save, false);
	document.getElementById("OPTgat").addEventListener("click", save, false);
	document.getElementById("OPTcha").addEventListener("click", save, false);
	document.getElementById("OPTfoo").addEventListener("click", save, false);
	document.getElementById("OPTsnc").addEventListener("click", handleSyncChange, false);
	document.getElementById("EIC_1").addEventListener("keyup", save, false);
	document.getElementById("EIC_2").addEventListener("keyup", save, false);
	document.getElementById("EIC_3").addEventListener("keyup", save, false);
	//---- END SAVE LISTENERS ----//
	
	//---- IMAGE PREVIEW ----//
	imagePreview = function(){
			xOffset = -25;
			yOffset = -100;
		$("label").hover(function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br /><span>" + this.t : "" + "</span>";
			$("body").append("<p id='preview'><img src='img/screens/"+ this.getAttribute("for") +".png' alt='Image preview' />"+ c +"</p>");
			$("#preview img")
				.css("max-width", window.innerWidth - 100)
				.css("max-height", window.innerHeight - 100);
			if ($("#preview").width() > (window.innerWidth - e.pageX - 130)) {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX - ($("#preview").width() - (window.innerWidth - e.pageX) + 75)) + "px")
					.fadeIn("fast");
			} else if ($("#preview").height() > (window.innerHeight - e.pageY - 55)) {
				$("#preview")
					.css("top",(e.pageY - ($("#preview").height() + 55)) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		},
		function(){
			this.title = this.t;
			$("#preview").remove();
		});
		$("a.preview").mousemove(function(e){
			if ($("#preview").width() > (window.innerWidth - e.pageX - 100) || $("#preview").height() > (window.innerHeight - e.pageY - 25)) {
				$("#preview")
					.css("top",(e.pageY + 75 - ($("#preview").height() - (window.innerHeight - e.pageY))) + "px")
					.css("left",(e.pageX - 75 - ($("#preview").width() - (window.innerWidth - e.pageX))) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		});
	};
	$(document).ready(function(){
		imagePreview();
	});
	//---- END IMAGE PREVIEW ----//
});

// UPDATE EXAMPLE BUTTON
function updateButton() {
	$("#testButton").attr("style","border: 1px solid #" + localStorage["BTNborder"] + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(#" + localStorage["BTNbottom"] + "),to(#" + localStorage["BTNtop"] + "));");
}

// NAVIGATION HANDLER
var last = "gen";
function navigate(link) {
	$("#OPT" + last).attr("style", "");
	$("#OPT" + link).attr("style", "display: block;");
	//document.getElementById("OPT" + link).scrollTop = 0;
	$("#" + last).attr("class", "");
	$("#" + link).attr("class", "current");
	//document.getElementById("OPTside").scrollTop = 0;
	last = link;
}

// RESET CUSTOM BUTTONS COLORS
function cButtonReset() {
	localStorage["BTNcolor"] = "#000000";
	localStorage["BTNborder"] = "#bbbbbb";
	localStorage["BTNbottom"] = "#f9f9f9";
	localStorage["BTNtop"] = "#ded5de";
	window.location.reload();
}

//---- EXPORT/IMPORT ----//
function export(EIid) {
	var prefOut = new Array();
		prefOut[0] = localStorage["options"];
		prefOut[1] = localStorage["BTNcolor"];
		prefOut[2] = localStorage["BTNborder"];
		prefOut[3] = localStorage["BTNbottom"];
		prefOut[4] = localStorage["BTNtop"];
		prefOut[5] = localStorage["customCSSval"];
		prefOut[6] = localStorage["appsURL"];
		prefOut[7] = localStorage["starCLR"];
		prefOut[8] = localStorage["uCLR"];
		prefOut[9] = localStorage["highCLR"];
		prefOut[10] = ""//localStorage["highCLRu"];
	var prefsOut = prefOut[0];	// fencepost
	for (var i = 1; i <= 10; i++) {
		prefsOut += '\n' + prefOut[i];
	}
	document.getElementById(EIid).innerHTML = prefsOut;
	if (EIid == "EIC_3") localStorage["EIC_3"] = prefsOut;	// backup existing to Custom 3
}

function import(EIid) {
	var prefsIn = document.getElementById(EIid).value;
	var prefIn = prefsIn.split("\n");
		localStorage["options"] = prefIn[0];
		localStorage["BTNcolor"] = prefIn[1];
		localStorage["BTNborder"] = prefIn[2];
		localStorage["BTNbottom"] = prefIn[3];
		localStorage["BTNtop"] = prefIn[4];
		localStorage["customCSSval"] = prefIn[5];
		localStorage["appsURL"] = prefIn[6];
		localStorage["starCLR"] = prefIn[7];
		localStorage["uCLR"] = prefIn[8];
		localStorage["highCLR"] = prefIn[9];
		//localStorage["highCLRu"] = prefIn[10];
	window.location.hash = "imps";
	window.location.reload();
}
//---- END EXPORT/IMPORT ----//

// EASTER EGG
function easterEgg() {
	if (!localStorage['easterEgg']) {
		localStorage['easterEgg'] = true;
		$('#easterEgg_off').attr('style','display:none;');
		$('#easterEgg_on').attr('style','display:block;');
	} else {
		localStorage.removeItem('easterEgg');
		$('#easterEgg_on').attr('style','display:none;');
		$('#easterEgg_off').attr('style','display:block;');
	}
}