<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("pillars", function (Blueprint $table) {
            $table->id();
            $table->string("name"); // naam van de pijler (Beweging, Voeding, etc.)
            $table->string("slug")->unique(); // beweging, voeding, etc.
            $table->string("color")->nullable(); // hex kleur (#00AEEF)
            $table->text("description"); // uitleg van de pijler
            $table->unsignedInteger("needed_value")->default(10); // hoeveel nodig is (bv. max = 10)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("pillars");
    }
};
