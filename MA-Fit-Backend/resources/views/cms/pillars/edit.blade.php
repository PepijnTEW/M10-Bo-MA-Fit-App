{{-- resources/views/cms/pillars/edit.blade.php --}}
@extends('layouts.cms')
@section('title', 'Pijler aanpassen - CMS')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <div>
        <h1 class="h4 mb-0">Pijler aanpassen</h1>
        <div class="text-muted small">Bewerk de pijler: <strong>{{ $pillar->name }}</strong></div>
    </div>
    <a href="{{ route('cms.pillars.index') }}" class="btn btn-outline-secondary">
        Terug
    </a>
</div>

<form method="POST" action="{{ route('cms.pillars.update', $pillar) }}" class="row g-3">
    @csrf
    @method('PUT')

    <div class="col-md-6">
        <label class="form-label">Naam</label>
        <input
            type="text"
            name="name"
            id="name"
            class="form-control @error('name') is-invalid @enderror"
            value="{{ old('name', $pillar->name) }}"
        >
        @error('name')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Slug</label>
        <input
            type="text"
            name="slug"
            id="slug"
            class="form-control @error('slug') is-invalid @enderror"
            value="{{ old('slug', $pillar->slug) }}"
        >
        @error('slug')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12">
        <label class="form-label">Beschrijving</label>
        <textarea
            name="description"
            rows="4"
            class="form-control @error('description') is-invalid @enderror"
        >{{ old('description', $pillar->description) }}</textarea>
        @error('description')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-md-6">
        <label class="form-label">Kleur</label>
        <div class="input-group">
            <input
                type="color"
                id="colorPicker"
                class="form-control form-control-color"
                value="{{ old('color', $pillar->color ?? '#22c55e') }}"
                title="Kies kleur"
                style="max-width:64px;"
            >
            <input
                type="text"
                name="color"
                id="colorText"
                class="form-control @error('color') is-invalid @enderror"
                value="{{ old('color', $pillar->color) }}"
            >
            @error('color')<div class="invalid-feedback d-block">{{ $message }}</div>@enderror
        </div>
    </div>

    <div class="col-md-6">
        <label class="form-label">Needed value (1-10)</label>
        <input
            type="number"
            name="needed_value"
            class="form-control @error('needed_value') is-invalid @enderror"
            value="{{ old('needed_value', $pillar->needed_value) }}"
            min="1"
            max="10"
        >
        @error('needed_value')<div class="invalid-feedback">{{ $message }}</div>@enderror
    </div>

    <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Opslaan</button>
        <a href="{{ route('cms.pillars.index') }}" class="btn btn-outline-secondary">Annuleren</a>
    </div>
</form>

@push('scripts')
<script>
    // Color sync
    const picker = document.getElementById('colorPicker');
    const colorText = document.getElementById('colorText');

    if (picker && colorText) {
        picker.addEventListener('input', () => colorText.value = picker.value);
        colorText.addEventListener('input', () => {
            if (/^#[0-9a-fA-F]{6}$/.test(colorText.value)) picker.value = colorText.value;
        });
    }
</script>
@endpush
@endsection
